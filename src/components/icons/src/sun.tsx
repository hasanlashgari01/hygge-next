import BaseIcon from "../base-icon";
import {TSvgIcon} from "../icon.types";

export default function SvgIcon(props: TSvgIcon) {
  return (
    <BaseIcon {...props}>
      <path d="M8.00022 10.727C9.50645 10.727 10.7275 9.50596 10.7275 7.99973C10.7275 6.4935 9.50645 5.27246 8.00022 5.27246C6.49399 5.27246 5.27295 6.4935 5.27295 7.99973C5.27295 9.50596 6.49399 10.727 8.00022 10.727Z"/><path d="M8 2V3.09091"/><path d="M8 12.9092V14.0001"/><path d="M3.75635 3.75586L4.53089 4.5304"/><path d="M11.4692 11.4688L12.2438 12.2433"/><path d="M2 8H3.09091"/><path d="M12.9092 8H14.0001"/><path d="M3.75635 12.2433L4.53089 11.4688"/><path d="M11.4692 4.5304L12.2438 3.75586"/>
    </BaseIcon>
  );
}