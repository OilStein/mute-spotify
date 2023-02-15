import { Accessor, Component, Setter, Show, children } from "solid-js";
import { AiFillCloseCircle } from 'solid-icons/ai'

type PopupProps = {
  trigger: Accessor<boolean>,
  setTrigger: Setter<boolean>
  button?: any,
  children: any,
}

const Popup: Component<PopupProps> = (props) => {
  const c = children(() => props.children);
  const toggle = () => props.setTrigger(!props.trigger())

  return (
    <Show
    when={props.trigger()}
    fallback={
    <div class="fixed top-0 left-0 w-full h-screen flex justify-center items-center">
      <div class="relative p-8 w-full max-w-lg bg-zinc-800">
        <a onClick={toggle}><AiFillCloseCircle class="absolute top-2 right-2 h-8 w-8 fill-red-800 hover:fill-red-900"/></a>
        {c()}
      </div>
    </div>
    }>

    </Show>
  )
};

export default Popup;