'use client'
import Button from '@/Button';
import React, { useRef, useState } from 'react'
function page() {
    const [count, setCount] = useState<number>(0);
    setCount(78)
    const input = useRef<HTMLInputElement>()
    const handleSubmit = (e: React.FormEvent) => {}
    function fn() {
    }
    return (
        <div>
            <Button data="alok" action={fn} />
            <form action="" onSubmit={handleSubmit}>
                <input type="text" ref={input} />
            </form>
        </div>
    )
}

export default page