import React, { Fragment, PropsWithChildren } from 'react'
import { Dialog as BaseDialog, Transition } from '@headlessui/react'

type Props = PropsWithChildren<{
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  title?: string
}>

const Dialog = (props: Props) => {
  const { children, isOpen, setIsOpen, title } = props

  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <BaseDialog
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center px-4"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <BaseDialog.Panel className="z-10 w-[500px] rounded bg-white">
            <BaseDialog.Title className="border-b bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text p-3 text-xl font-medium capitalize text-transparent">
              {title ?? 'Dialog'}
            </BaseDialog.Title>
            <div className="max-h-[400px] overflow-y-auto px-3 py-4">
              {children}
            </div>
          </BaseDialog.Panel>
        </Transition.Child>
      </BaseDialog>
    </Transition>
  )
}

export default Dialog
