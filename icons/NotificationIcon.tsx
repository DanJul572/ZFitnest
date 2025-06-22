import Svg, { G, Mask, Path, SvgProps } from 'react-native-svg';

const NotificationIcon = (props: SvgProps) => (
  <Svg width={15} height={17} fill="none" {...props}>
    <Mask
      id="a"
      width={15}
      height={14}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}
    >
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M.25.75h13.873v13.011H.25V.75Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#1D1617"
        fillRule="evenodd"
        d="M7.185 1.875c-2.621 0-4.448 2.054-4.448 3.896 0 1.56-.433 2.28-.815 2.916-.307.511-.55.915-.55 1.791.126 1.415 1.06 2.158 5.813 2.158 4.728 0 5.69-.776 5.815-2.206-.002-.829-.245-1.232-.551-1.743-.383-.636-.816-1.356-.816-2.916 0-1.842-1.826-3.896-4.448-3.896Zm0 11.886c-3.507 0-6.676-.247-6.935-3.235C.248 9.29.625 8.662.958 8.108c.337-.56.654-1.09.654-2.337C1.612 3.346 3.852.75 7.185.75c3.334 0 5.574 2.596 5.574 5.021 0 1.248.317 1.776.653 2.337.333.554.71 1.182.71 2.37-.261 3.036-3.43 3.283-6.937 3.283Z"
        clipRule="evenodd"
      />
    </G>
    <Path
      fill="#1D1617"
      fillRule="evenodd"
      d="M7.149 16.875h-.002c-.84 0-1.636-.371-2.24-1.044a.561.561 0 1 1 .836-.752c.389.433.888.671 1.405.671.52 0 1.022-.238 1.41-.671a.563.563 0 0 1 .837.753c-.606.672-1.403 1.043-2.246 1.043Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default NotificationIcon;
