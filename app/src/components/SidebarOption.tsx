
import {Component} from 'solid-js';

type SidebarOptionProps = {
  title: any,
  Icon: any,
}

const SidebarOption: Component<SidebarOptionProps> = ({title, Icon}) => {
    return (
      <div class="sidebarOption">
        {Icon && <Icon className="sidebarOption__icon" />}
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}
      </div>
    )
}

export default SidebarOption;