import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Art Yavorsky';

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#000',
            color: '#fff',
          }}
        >
          {/* Background grid pattern */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              opacity: 0.08,
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Content container */}
          <div
            style={{
              display: 'flex',
              width: '100%',
              padding: '80px',
              alignItems: 'flex-start',
              position: 'relative',
            }}
          >
            {/* Main title */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              <h2
                style={{
                  fontSize: '72px',
                  fontWeight: 'bold',
                  letterSpacing: '-0.03em',
                  color: '#fff',
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                {title}
              </h2>

              {/* Decorative line */}
              <div
                style={{
                  width: '120px',
                  height: '2px',
                  background: '#333',
                }}
              />
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response('Failed to generate image', { status: 500 });
  }
}
