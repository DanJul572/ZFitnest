import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

const ActivityIcon = (props: SvgProps) => (
  <Svg width={21} height={22} fill="none" {...props}>
    <Path
      stroke="#ADA4A5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="m5.245 13.781 2.993-3.89 3.414 2.682 2.93-3.78"
    />
    <Circle
      cx={17.995}
      cy={3.2}
      r={1.922}
      stroke="#ADA4A5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
    />
    <Path
      stroke="#ADA4A5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M12.925 2.12H5.657C2.645 2.12.778 4.253.778 7.264v8.083c0 3.011 1.83 5.135 4.879 5.135h8.604c3.011 0 4.879-2.124 4.879-5.135v-7.04"
    />
  </Svg>
);
export default ActivityIcon;
