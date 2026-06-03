import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { origin } = new URL(request.url)
    
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            background: '#ffffff',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderTop: '16px solid #4f46e5', // indigo-600 top border
          }}
        >
          <img
            src={`${origin}/staticui.png`}
            alt="Static UI Logo"
            style={{ width: '400px', objectFit: 'contain' }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.error(e)
    return new Response('Failed to generate image', { status: 500 })
  }
}
