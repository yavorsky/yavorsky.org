# Custom Elements v1: Frameworks are fleetly, Native - eternally
##### Nov 22, 2016

Let's imagine you have an idea to create a **reusable component**. Also, you want to use it not only in the current application but in others too. You could use Angular, React, Vue ..... Polymer, Ember, ....,  Knockout, jQuery...🤐 but no warranties that your next project will be built with the same framework as previous. Moreover, you wish to share it with others by uploading code to GitHub repo. Obviously you have to write separate modules for each framework, even for vanilla javascript. 

You have cheerful mood and, farsightedly, decided to create it for a certain amount of frameworks you love the most. We call it *awesomeButton* (*react-awesomeButton*, *ui-awesomeButton*, *awesomeButton.js* for consistency). After couple(few) hours we have working examples. Then, we will publish it to npm, deploy to github and initialy it looks tempting. After a while, we notice a first pull request! Cool, let's merge! But wait? This changes will be affected only for one of our projects (ex. react-awesomeButton). Then we merge different PR on another repo (ex. ui-awesomeButton). You decided to update all components to a single state, but discover new forks for Ember and Vue. Ideally you will submit PR with new changes to this forks, but in fact, every project will live its own life. (..And someday one of listed becomes a huge framework. I believe it's cherished dream of all tiny libraries).
So, maybe we have a glass of water in this mess...  And, fortunately, we have! So near... It calls Custom Elements. 

[Theory of everything](https://en.wikipedia.org/wiki/Theory_of_everything) Wikipedia's article describes one interesting thing:
![Theory of everything](https://s12.postimg.org/57z02x2q5/1234.jpg)

### But seriously?
Custom elements provide a way for developers to build their own fully-featured DOM elements. It's a part of the Web Components spec based on “rationalize the platform” concept supported by guys from google and Mozilla. It's a great attempt to standardize part of logic provided by components from different frameworks. 

In general, it unlocks features like: 

1. New HTML elements definition.
2. Extending native (button, input) or custom elements.
3. Elements' expansion with custom methods.
4. Handling element's lifecycle.
5. Changing native elements behavior with **is** attribute.
6. Creating elements from templates.

Using native features gives us many benefits: making applications with fewer dependencies, development process unification, performance optimizing...

To explain how Custom Elements are useful, let's create concise example - simple element that truncate own content depending on its attribute *max* and adds *preview* attribute on hover:
`<custom-truncate max=5>Why only 5 characters are allowed? This is infringement of my rights!<custom-truncate>`
must be reflected as *Why o...*
![Live truncating](https://s15.postimg.org/ygrj32tqj/ezgif_com_gif_maker.gif)

Initially, let's define the Element's **class**. Yes, class, like in React or many others frameworks! We can inherit from the base **HTMLElement**, but, actually, you can affect every DOM element. So, by extending HTMLElement we are creating public Javascript API for our future tag:

```js
class CustomTruncate extends HTMLElement {
  constructor() {
    super();

    // We can already access *this* and define listeners.
    this.addEventListener('click',  this.handleClick.bind(this));
  }
  handleClick(evt) {
    console.log('clicked!');
  }
}
```
As you noticed, we created class based on HTMLElement and extended it with our listener.
But how to create HTML tag using our class?

Heart of Custom Elements v.1 is **window.customElements** global variable. It helps us to **define** element and **get** it in future.

3 rules of custom elements:
  * The name of a custom element must **contain a dash** (-) and must **not contain a uppercase letter A-Z**.
  * You **can't register** tag with the same name **more than once**.
  * Custom elements **can't be self-closing**.


Ok, you are ready! Let's define it according to the rules above!

```js
window.customElements.define('custom-truncate', CustomTruncate)
```
For now, you can fully use it in **html** like any other tag:

```html
<custom-truncate></custom-truncate>
```

Even in React:
```js
  class Wrapper extends Component {
    render() {
      return <custom-truncate max={this.state.max}>{this.props.value}</custom-truncate>;
    }
  }
```

Meaningful access from css:
```css
custom-truncate {
  color: darkblue
  background-color: beige;
}
```

One of the most enticing features is **properties to attributes reflection**.
It allows to connect and handle attributes changes from DOM's element representation to tag and vice versa:
```html
<custom-truncate></custom-truncate>
```
⬇️ update max value: 
```js
const customTruncate = document.querySelector('custom-truncate');
customTruncate.max = 10;
```
⬇️ object's property has reflected to the tag:
```html
<custom-truncate max=10></custom-truncate>
```

Moreover, we can observe every change of such kind, transform, prevent or just log it.
But, there are some exceptions. Only whitelisted attributes defined in **observedAttributes** are modifiable.
Let's define observedAttributes and make properties to attributes reflection:

```js
class CustomTruncate extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('mouseover',  this.handleHover.bind(this, true));
    this.addEventListener('mouseleft',  this.handleHover.bind(this, false));
  }
  // define custom attributes to observe
  static get observedAttributes() {
    return ['max', 'preview'];
  }
  // reflect properties to attributes
  get max() {
    return this.getAttribute('max');
  }
  set max(val) {
    return this.setAttribute('max', val);
  }
  get preview() {
    return this.hasAttribute('preview');
  }
  set preview(val) {
    val ? this.setAttribute('preview', '') : this.removeAttribute('preview');
  }
  // will reflect to attributes
  handleHover(isPushed) {
    this.preview = isPushed;
  }
}
```

Look, inside class methods `this` refers to our element right after *super* was called! Through this feature props are directly updating element's attributes:

For now, we are adding new styles for mouseover:

```css
custom-truncate[preview] {
  cursor: pointer;
}
```

In the next step, we are going to fill element with some semantic. 
Also, it's good reason to look into the **component's lifecycle** and compare it with popular frameworks' one:
  
  |             |                                                                                                                                                                |
  |-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | constructor | element was created or upgraded. It's like a *constructor* or *componentWillMount* in React. There you can set initial variables, attach event listeners, etc. |
  | connectedCallback | element was attached to DOM. Something like *componentDidMount* in React. Place for innerHTML or childNodes manipulation, etc.                         |
  | disconnectedCallback | element was removed from DOM Tree (*component~~Will~~DidUnmount*).                                                                                    |
  | attributeChangedCallback | any of attributes defined in **observedAttributes** was changed.                                                                                  |
  | adoptedCallback | element was moved to a new document.                                                                                                                       |

The one thing left is to provide render method. Custom element's API hasn't it but we can create!
Moreover, we wouldn't want our content mutating. It's a simple task with [Shadow DOM API](https://developers.google.com/web/fundamentals/getting-started/primers/shadowdom) (don't confuse with Virtual DOM).
I would like to cover Shadow DOM topic in a different blog post subsequently, but, in a nutshell, it's encapsulated DOM tree nested in a certain DOM element. If one of DOM elements includes Shadow root, then browser will ignore element's content and display Shadow root:
![Shadow Root](https://s14.postimg.org/y0n88zpxt/Screen_Shot_2016_11_22_at_02_29_10.png)


```js
class CustomTruncate extends HTMLElement {
  constructor() {
    super();

    // add Shadow root to the element.
    this.attachShadow({mode: 'open'});
    this.addEventListener('mouseover',  this.handleHover.bind(this, true));
    this.addEventListener('mouseout',  this.handleHover.bind(this, false));
  }
  static get observedAttributes() {
    return ['max', 'preview'];
  }
  // reflect properties to attributes
  get max() {
    return this.getAttribute('max');
  }
  set max(val) {
    return this.setAttribute('max', val);
  }
  get preview() {
    return this.hasAttribute('preview');
  }
  set preview(val) {
    val ? this.setAttribute('preview', '') : this.removeAttribute('preview');
  }
  handleHover(isPushed) {
    this.preview = isPushed;
  }
  // Rerender after element was mounted
  connectedCallback() {
    this.render();
  }
  // or one of attributes was changed
  attributeChangedCallback(attr, prevValue, nextValue) {
    this.render();
  }
  render() {
    const {max, preview} = this;
    const {innerHTML: content} = this;
    const truncated  = (preview || content.length < max) ? content : `${content.slice(0, max)}...`;

    this.shadowRoot.innerHTML = truncated;
  }
}
```


So, we just created the custom element using v1 spec. The whole logic is based on a single class. Moreover, we can reuse our component anywhere in our application or in any others writen with HTML. We have learned how to create simple DOM element's API, define it, reflect props to attributes, run through element's lifecycle and tried to draw a parallel between **Native** Custom Elements and **Frameworks**' Components.


For me, the main disadvantage of future where Custom Elements will rock is maintenance. Frameworks updates and relases successively, but native features along
with browsers. Publishing your web app allows you to control all the dependencies you are using, but for native things it's much more difficult. Other point is that Custom Elements was presented 2 years ago, but looking at the current compatibility table makes us think that using it without polyfills even in a year is hard to imagine. The honey spoon of the last 2 years was [Custom Elements's 1 version](https://html.spec.whatwg.org/multipage/scripting.html#custom-element) release and [Custom Elements in Safari Technology Preview](https://webkit.org/blog/7027/introducing-custom-elements/) announcement.

|   |Chrome|Safari|Firefox|Edge|Opera|
|---|------|------|-------|-----|----|
|v0.|  33  |  ❌  |   ❌  | ❌ | 20 |
|v1.|  54  |  TP  |   ❌  | ❌ | 41 |

Thanks for reading my first article. Hope, you've found something for yourself. 
All updates will appear on my [twitter](https://twitter.com/yavorsky_) and [github](https://github.com/yavorsky) accounts.