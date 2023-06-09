import React, { useEffect, useState } from 'react'
// import styles from './index.module.less'

const Index = () => {
  const [list, setList] = useState<any[]>([])

  useEffect(() => {
    window.electron?.getAppList().then((list: any[]) => {
      console.log('list', list)
      setList(list)
    })
  }, [])

  return (
    <div
      aria-hidden="true"
      className="flex align-middle justify-center w-screen h-screen"
    >
      <div className="flex items-center space-x-6 lg:space-x-8 justify-center m-auto">
        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="h-64 w-44 overflow-hidden rounded-lg">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
