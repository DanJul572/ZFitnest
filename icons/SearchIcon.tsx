import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

const SearchIcon = (props: SvgProps) => (
  <Svg width={18} height={19} fill="none" {...props}>
    <Circle
      cx={8.805}
      cy={8.806}
      r={7.49}
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.015 14.404 2.937 2.93"
    />
  </Svg>
);
export default SearchIcon;
