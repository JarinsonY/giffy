import { useEffect, useState, useRef } from 'react'

// Hook Lazy Load
export default function useNearScreen({ distance = '100px', externalRef, once = true }) {
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()

    useEffect(function () {
        let observer

        const element = externalRef ? externalRef.current : fromRef.current

        const onChange = (entris, observer) => {
            const el = entris[0]
            if (el.isIntersecting) {
                setShow(true)
                once && observer.disconnect()
            } else {
                !once && setShow(false)
            }
        }

        //Promesa para que importe el Polyfy de soporte del Intersection solo si el navegador lo necesita
        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
                ? IntersectionObserver
                : import('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: distance
            })

            if(element) observer.observe(element)
        })


        return () => observer && observer.disconnect()
    })

    return { isNearScreen, fromRef }
}