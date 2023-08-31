import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from "../../src/styles/RecentBlog.module.css"

const RecentBlog = () => {
    return (
        <section className={style.recentBlog}>
            <h2 className={`text-3xl font-semibold ${style.recentHeading}`}>Recent <span className='text-purple-400'>Blogs</span></h2>
            <div className={style.blogList}>
                <article className={style.blogCard}>
                    <Image src={"/choosing.jpg"} alt='Image' height={1000} width={2000} className={style.blogImage} />
                    <div className={style.blogDetail}>
                        <h3 className={style.blogTitle}>Title</h3>
                        <div className={style.blogDesc}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis ratione eum, mollitia tempora minus fugiat, quaerat facilis et perferendis quibusdam possimus, rerum cupiditate est nemo!</p>
                            <Link href={"/"} className={style.blogLink}>Read More</Link>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default RecentBlog
