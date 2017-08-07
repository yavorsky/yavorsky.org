export default () =>
  <article class="markdown-body">
    <h1 id="custom-elements-v1-frameworks-are-fleetly-native-eternally">
      <a name="user-content-custom-elements-v1-frameworks-are-fleetly-native-eternally" href="#custom-elements-v1-frameworks-are-fleetly-native-eternally" class="headeranchor-link" aria-hidden="true"><span class="headeranchor"></span>
      </a>Custom Elements v1: Frameworks are fleetly, Native - eternally
    </h1>
    <h5 id="nov-22-2016"><a name="user-content-nov-22-2016" href="#nov-22-2016" class="headeranchor-link" aria-hidden="true"><span class="headeranchor"></span></a>Nov 22, 2016</h5>
    <p>Let&rsquo;s imagine you have an idea to create a <strong>reusable component</strong>. Also, you want to use it not only in the current application but in others too. You could use Angular, React, Vue ..... Polymer, Ember, ....,  Knockout, jQuery&hellip;🤐 but no warranties that your next project will be built with the same framework as previous. Moreover, you wish to share it with others by uploading code to GitHub repo. Obviously you have to write separate modules for each framework, even for vanilla javascript. </p>
    <p>You have cheerful mood and, farsightedly, decided to create it for a certain amount of frameworks you love the most. We call it <em>awesomeButton</em> (<em>react-awesomeButton</em>, <em>ui-awesomeButton</em>, <em>awesomeButton.js</em> for consistency). After couple(few) hours we have working examples. Then, we will publish it to npm, deploy to github and initialy it looks tempting. After a while, we notice a first pull request! Cool, let&rsquo;s merge! But wait? This changes will be affected only for one of our projects (ex. react-awesomeButton). Then we merge different PR on another repo (ex. ui-awesomeButton). You decided to update all components to a single state, but discover new forks for Ember and Vue. Ideally you will submit PR with new changes to this forks, but in fact, every project will live its own life. (..And someday one of listed becomes a huge framework. I believe it&rsquo;s cherished dream of all tiny libraries).<br />
    So, maybe we have a glass of water in this mess&hellip;  And, fortunately, we have! So near&hellip; It calls Custom Elements. </p>
    <p><a href="https://en.wikipedia.org/wiki/Theory_of_everything">Theory of everything</a> Wikipedia&rsquo;s article describes one interesting thing:<br />
  <img alt="Theory of everything" src="https://s12.postimg.org/57z02x2q5/1234.jpg" /></p>
  <h3 id="but-seriously"><a name="user-content-but-seriously" href="#but-seriously" class="headeranchor-link" aria-hidden="true"><span class="headeranchor"></span></a>But seriously?</h3>
  <p>Custom elements provide a way for developers to build their own fully-featured DOM elements. It&rsquo;s a part of the Web Components spec based on “rationalize the platform” concept supported by guys from google and Mozilla. It&rsquo;s a great attempt to standardize part of logic provided by components from different frameworks. </p>
  <p>In general, it unlocks features like: </p>
  <ol>
    <li>New HTML elements definition.</li>
    <li>Extending native (button, input) or custom elements.</li>
    <li>Elements&rsquo; expansion with custom methods.</li>
    <li>Handling element&rsquo;s lifecycle.</li>
    <li>Changing native elements behavior with <strong>is</strong> attribute.</li>
    <li>Creating elements from templates.</li>
  </ol>
  <p>Using native features gives us many benefits: making applications with fewer dependencies, development process unification, performance optimizing&hellip;</p>
  <p>To explain how Custom Elements are useful, let&rsquo;s create concise example - simple element that truncate own content depending on its attribute <em>max</em> and adds <em>preview</em> attribute on hover:<br />
    <code>&lt;custom-truncate max=5&gt;Why only 5 characters are allowed? This is infringement of my rights!&lt;custom-truncate&gt;</code><br />
    must be reflected as <em>Why o&hellip;</em><br />
  <img alt="Live truncating" src="https://s15.postimg.org/ygrj32tqj/ezgif_com_gif_maker.gif" /></p>
  <p>Initially, let&rsquo;s define the Element&rsquo;s <strong>class</strong>. Yes, class, like in React or many others frameworks! We can inherit from the base <strong>HTMLElement</strong>, but, actually, you can affect every DOM element. So, by extending HTMLElement we are creating public Javascript API for our future tag:</p>
    <p><pre><code class="js">{`class CustomTruncate extends HTMLElement {
        constructor() {
          super();
          // We can already access *this* and define listeners.
          this.addEventListener('click',  this.handleClick.bind(this));
        }
        handleClick(evt) {
          console.log('clicked!');
        }
      }
  `}</code></pre><br />
  As you noticed, we created class based on HTMLElement and extended it with our listener.<br />
  But how to create HTML tag using our class?</p>
  <p>Heart of Custom Elements v.1 is <strong>window.customElements</strong> global variable. It helps us to <strong>define</strong> element and <strong>get</strong> it in future.</p>
  <p>3 rules of custom elements:<br />
  * The name of a custom element must <strong>contain a dash</strong> (-) and must <strong>not contain a uppercase letter A-Z</strong>.<br />
  * You <strong>can&rsquo;t register</strong> tag with the same name <strong>more than once</strong>.<br />
  * Custom elements <strong>can&rsquo;t be self-closing</strong>.</p>
  <p>Ok, you are ready! Let&rsquo;s define it according to the rules above!</p>
    <p><pre><code class="js">window.customElements.define('custom-truncate', CustomTruncate)
  </code></pre><br />
  For now, you can fully use it in <strong>html</strong> like any other tag:</p>
    <pre><code class="html">&lt;custom-truncate&gt;&lt;/custom-truncate&gt;
  </code></pre>
  <p>Even in React:<br />
    <pre><code class="js">{`  class Wrapper extends Component {
        render() {
          return &lt;custom-truncate max={this.state.max}&gt;{this.props.value}&lt;/custom-truncate&gt;;
        }
      }
  `}</code></pre></p>
  <p>Meaningful access from css:<br />
    <pre><code class="css">{`custom-truncate {
        color: darkblue
        background-color: beige;
      }
  `}</code></pre></p>
  <p>One of the most enticing features is <strong>properties to attributes reflection</strong>.<br />
    It allows to connect and handle attributes changes from DOM&rsquo;s element representation to tag and vice versa:<br />
      <pre><code class="html">&lt;custom-truncate&gt;&lt;/custom-truncate&gt;
    </code></pre><br />
    ⬇️ update max value: <br />
      <pre><code class="js">const customTruncate = document.querySelector('custom-truncate');
        customTruncate.max = 10;
    </code></pre><br />
    ⬇️ object&rsquo;s property has reflected to the tag:<br />
      <pre><code class="html">&lt;custom-truncate max=10&gt;&lt;/custom-truncate&gt;
    </code></pre></p>
    <p>Moreover, we can observe every change of such kind, transform, prevent or just log it.<br />
      But, there are some exceptions. Only whitelisted attributes defined in <strong>observedAttributes</strong> are modifiable.<br />
    Let&rsquo;s define observedAttributes and make properties to attributes reflection:</p>
      <pre><code class="js">{`class CustomTruncate extends HTMLElement {
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
    `}</code></pre>
    <p>Look, inside class methods <code>this</code> refers to our element right after <em>super</em> was called! Through this feature props are directly updating element&rsquo;s attributes:</p>
    <p>For now, we are adding new styles for mouseover:</p>
      <pre><code class="css">{`custom-truncate[preview] {
          cursor: pointer;
        }
    `}</code></pre>
    <p>In the next step, we are going to fill element with some semantic. <br />
    Also, it&rsquo;s good reason to look into the <strong>component&rsquo;s lifecycle</strong> and compare it with popular frameworks&rsquo; one:</p>
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>constructor</td>
          <td>element was created or upgraded. It&rsquo;s like a <em>constructor</em> or <em>componentWillMount</em> in React. There you can set initial variables, attach event listeners, etc.</td>
        </tr>
        <tr>
          <td>connectedCallback</td>
          <td>element was attached to DOM. Something like <em>componentDidMount</em> in React. Place for innerHTML or childNodes manipulation, etc.</td>
        </tr>
        <tr>
          <td>disconnectedCallback</td>
          <td>element was removed from DOM Tree (<em>component<del>Will</del>DidUnmount</em>).</td>
        </tr>
        <tr>
          <td>attributeChangedCallback</td>
          <td>any of attributes defined in <strong>observedAttributes</strong> was changed.</td>
        </tr>
        <tr>
          <td>adoptedCallback</td>
          <td>element was moved to a new document.</td>
        </tr>
      </tbody>
    </table>
    <p>The one thing left is to provide render method. Custom element&rsquo;s API hasn&rsquo;t it but we can create!<br />
      Moreover, we wouldn&rsquo;t want our content mutating. It&rsquo;s a simple task with <a href="https://developers.google.com/web/fundamentals/getting-started/primers/shadowdom">Shadow DOM API</a> (don&rsquo;t confuse with Virtual DOM).<br />
      I would like to cover Shadow DOM topic in a different blog post subsequently, but, in a nutshell, it&rsquo;s encapsulated DOM tree nested in a certain DOM element. If one of DOM elements includes Shadow root, then browser will ignore element&rsquo;s content and display Shadow root:<br />
    <img alt="Shadow Root" src="https://s14.postimg.org/y0n88zpxt/Screen_Shot_2016_11_22_at_02_29_10.png" /></p>
      <pre><code class="js">{`class CustomTruncate extends HTMLElement {
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
            const truncated  = (preview || content.length &lt; max) ? content : '\${content.slice(0, max)}...';
            this.shadowRoot.innerHTML = truncated;
          }
        }
    `}</code></pre>
    <p>So, we just created the custom element using v1 spec. The whole logic is based on a single class. Moreover, we can reuse our component anywhere in our application or in any others writen with HTML. We have learned how to create simple DOM element&rsquo;s API, define it, reflect props to attributes, run through element&rsquo;s lifecycle and tried to draw a parallel between <strong>Native</strong> Custom Elements and <strong>Frameworks</strong>&lsquo; Components.</p>
    <p>For me, the main disadvantage of future where Custom Elements will rock is maintenance. Frameworks updates and relases successively, but native features along<br />
      with browsers. Publishing your web app allows you to control all the dependencies you are using, but for native things it&rsquo;s much more difficult. Other point is that Custom Elements was presented 2 years ago, but looking at the current compatibility table makes us think that using it without polyfills even in a year is hard to imagine. The honey spoon of the last 2 years was <a href="https://html.spec.whatwg.org/multipage/scripting.html#custom-element">Custom Elements&rsquo;s 1 version</a> release and <a href="https://webkit.org/blog/7027/introducing-custom-elements/">Custom Elements in Safari Technology Preview</a> announcement.</p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Chrome</th>
            <th>Safari</th>
            <th>Firefox</th>
            <th>Edge</th>
            <th>Opera</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>v0.</td>
            <td>33</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>20</td>
          </tr>
          <tr>
            <td>v1.</td>
            <td>54</td>
            <td>TP</td>
            <td>❌</td>
            <td>❌</td>
            <td>41</td>
          </tr>
        </tbody>
      </table>
      <p>Thanks for reading my first article. Hope, you&rsquo;ve found something for yourself. <br />
        All updates will appear on my <a href="https://twitter.com/yavorsky_">twitter</a> and <a href="https://github.com/yavorsky">github</a> accounts.</p></article>
