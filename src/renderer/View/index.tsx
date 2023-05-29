import React, { useEffect, useState } from 'react'

const Index = () => {
  const [list, setList] = useState([])

  const openSelectHandle = () => {
    ;(window as any).electron.selectApp(1111).then((res: any) => {
      // setList(res)
      console.log('res', res)
    })
  }

  useEffect(() => {
    ;(window as any).electron.getAppList().then((res: any) => {
      setList(res)
    })
  }, [])

  return (
    <div>
      {list.map((item, index) => (
        <div
          style={{
            width: 300,
            height: 100,
            lineHeight: '100px',
            textAlign: 'center',
            border: '1px solid red',
          }}
          key={index}
          onClick={openSelectHandle}
        >
          {item}111
        </div>
      ))}
    </div>
  )
}

export default Index
