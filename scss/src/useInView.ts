import { useEffect, useRef, useState } from 'react'

function useInView<T extends Element>(threshold = 0.3) {
    const ref = useRef<T>(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true)
                observer.disconnect()
            }
        }, { threshold })

        observer.observe(element)
        return () => observer.disconnect()
    }, [threshold])

    return { ref, inView }
}

export default useInView
