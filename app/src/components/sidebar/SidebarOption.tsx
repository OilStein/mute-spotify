import {Component} from 'solid-js';

type SidebarOptionProps = {
  title: any,
  Icon?: any,
  onClick?: any
}

const SidebarOption: Component<SidebarOptionProps> = ({title, Icon, onClick}) => {



    return (
      <div onClick={onClick} class="flex items-center cursor-pointer text-zinc-400 hover:text-white font-semibold">
        {Icon && <Icon class="m-2"/>}
        {Icon ? <h4 >{title}</h4> : <p class='mx-2 my-1 text-sm'>{title}</p>}
      </div>
    )
}

export default SidebarOption;