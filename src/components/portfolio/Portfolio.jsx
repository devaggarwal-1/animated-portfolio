import { useRef } from "react"
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/18286209/pexels-photo-18286209/free-photo-of-blooming-hydrangea-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet risus ac enim porta vestibulum. Fusce commodo, mi at laoreet condimentum, mi tortor posuere nunc, commodo porta libero tortor laoreet tortor."
    },
    {
        id: 2,
        title: "Next.js Commerce",
        img: "https://images.pexels.com/photos/19149982/pexels-photo-19149982/free-photo-of-a-person-riding-a-motorcycle-with-pink-smoke.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet risus ac enim porta vestibulum. Fusce commodo, mi at laoreet condimentum, mi tortor posuere nunc, commodo porta libero tortor laoreet tortor."
    },
    {
        id: 3,
        title: "Vanilla Js App",
        img: "https://images.pexels.com/photos/19148164/pexels-photo-19148164/free-photo-of-louisville-ky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet risus ac enim porta vestibulum. Fusce commodo, mi at laoreet condimentum, mi tortor posuere nunc, commodo porta libero tortor laoreet tortor."
    },
    {
        id: 4,
        title: "Music App",
        img: "https://images.pexels.com/photos/19149242/pexels-photo-19149242/free-photo-of-a-window-sill-with-a-cup-of-coffee-and-a-candle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet risus ac enim porta vestibulum. Fusce commodo, mi at laoreet condimentum, mi tortor posuere nunc, commodo porta libero tortor laoreet tortor."
    },
]

const Single = ({ item }) => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])

    return (
        <section ref={ref}>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2 >{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function Portfolio() {

    const ref = useRef()

    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio