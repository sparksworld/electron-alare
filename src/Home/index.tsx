import React, { useEffect, useState } from 'react'
// import styles from './index.module.less'

const Index = () => {
  const [list, setList] = useState<any[]>([])
  const [screenList, setScreenList] = useState<any[]>([])
  const [active, setActive] = useState(null)

  useEffect(() => {
    window.electron?.getApps().then((list: any[]) => {
      console.log('list', list)
      setList(list)
    })
    window.electron?.getScreens().then((screens: any[]) => {
      console.log('screens', screens)
      setScreenList(screens)
      // setList(list)
    })
  }, [])

  const onActiveHandle = (active) => {
    setActive(active)
  }

  const onOpenAppHandle = (app: any, screen: any) => {
    window.electron?.openApp(app, screen)
  }

  return (
    <div className="w-screen h-screen min-h-screen app-bg bg-grid-slate-100 p-10 overflow-y-auto">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12">
        {list.map((item, index) => (
          <div
            key={index}
            className="relative hover:-translate-y-1 border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-xl  flex flex-col justify-between leading-normal transition-all duration-500 overflow-hidden"
          >
            <div onClick={() => onActiveHandle(index)}>
              <div className="flex align-middle justify-center">
                <img
                  src={item?.ico}
                  alt=""
                  className="w-full h-80 object-cover object-top flex-none bg-cover rounded-t  text-center overflow-hidden"
                />
              </div>
              <div className="p-4">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {item?.title}
                </div>
                <p className="text-gray-700 text-base">{item.description}</p>
                <p className="text-sm text-gray-600 flex items-center mt-10">
                  <svg
                    className="fill-current text-gray-500 w-3 h-3 mr-2"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  {item?.path}
                </p>
              </div>
            </div>

            {index == active && (
              <div
                className="absolute inset-0 bg-slate-400 bg-opacity-75 flex flex-col items-center justify-center"
                onClick={() => setActive(null)}
              >
                {screenList?.map((_item) => (
                  <button
                    key={_item.id}
                    type="button"
                    className="w-1/2 inline-flex justify-center rounded-md border shadow-sm px-4 py-2 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-4"
                    onClick={() => onOpenAppHandle(item, _item)}
                  >
                    {_item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* <Modal show={on}>111</Modal> */}
    </div>
  )
}

export default Index
