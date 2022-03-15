import {useRef, useEffect} from 'react'

const BounceSim = props => {
    const canvasRef = useRef(null)
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.fillStyle = "#000000"
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
        }, [])

    
    return <canvas ref={canvasRef} {...props}>If you can see this, your browser likely doesn't support HTML canvas rendering.</canvas>
}
export default BounceSim;