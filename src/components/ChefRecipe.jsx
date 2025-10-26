import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export function ChefRecipe({ loading, output }) {
  return (
    <section className="suggested-recipe-container">
    <h1 className="recipe-h1">Chef GPT Recommends</h1>

    {loading ? (
        <DotLottieReact
        src="https://lottie.host/00fe4d66-ec58-4892-843a-f457e7c7321f/8dJS23NOhJ.lottie"
        loop
        autoplay
        alt="Loading..."
        className='spinner'
        />
    ) : (
        <div className="markdown-body">
        <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        >
            {output || ""}
        
        </ReactMarkdown>
        </div>
    )}
    </section>
)
}
