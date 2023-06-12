/*
 * @Author: spark
 * @Date: 2021-09-08 14:42:08
 * @LastEditTime: 2023-06-12 19:05:17
 * @LastEditors: spark
 * email: spark.xiaoyu@qq.com
 */
// import { CSSTransition } from 'react-transition-group'
import { createPortal } from 'react-dom'
import React, { PropsWithChildren, useState } from 'react'

// import styles from './index.module.less'
interface IModalProps {
  onClick?: (...arg: any) => void
}

interface IProps {
  show: boolean
  type?: 'row' | 'column'
  title?: string | React.ReactNode | null
  footer?: string | React.ReactNode | null
}

const Portal = ({ children, rootId }: any) => {
  const root: Element | DocumentFragment | null =
    document.getElementById(rootId)
  return createPortal(children, root ?? document.body)
}

const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
  e.stopPropagation()

const callAll =
  (...fns: any[]) =>
  (...args: any[]) =>
    fns.forEach((fn) => fn && fn(...args))

export function useModal() {
  const [on, setOn] = useState(false)
  // const [content, setContent] = useState({})
  const show = () => {
    setOn(true)
  }
  const hide = () => {
    setOn(false)
  }
  const toggle = () => {
    setOn(!on)
  }

  const modalProps = (props?: IModalProps) => {
    console.log('123232')
    return {
      onClick: callAll(props?.onClick, toggle),
    }
  }

  const maskProps = (props?: IModalProps) => ({
    show: on,
    onClick: (e: any) => {
      e.stopPropagation()
      callAll(props?.onClick, toggle)()
    },
  })
  return {
    on,
    show,
    hide,
    toggle,
    maskProps,
    modalProps,
  }
}

export function Modal(_: PropsWithChildren<IProps>) {
  const { show, title, footer, children } = _

  return (
    <Portal>
      {show && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>

            <span
              className="sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  {/* <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div> */}
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      {title}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to deactivate your account? All of
                        your data will be permanently removed. This action
                        cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {!!footer && (
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  {footer}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Portal>
  )
}
