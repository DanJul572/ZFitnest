import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Path,
  Stop,
  SvgProps,
} from 'react-native-svg';

const ActivityActiveIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="url(#a)"
      fillRule="evenodd"
      d="M15.18 2.41c0-1.33 1.08-2.41 2.41-2.41S20 1.08 20 2.41s-1.08 2.41-2.41 2.41-2.41-1.08-2.41-2.41Zm-3.85 10.35 2.89-3.73-.04.02c.16-.22.19-.5.08-.75a.737.737 0 0 0-.61-.44.768.768 0 0 0-.7.31l-2.42 3.13-2.77-2.18a.79.79 0 0 0-.57-.16.775.775 0 0 0-.5.3l-2.96 3.85-.06.09a.747.747 0 0 0 .21.95c.14.09.29.15.46.15.23.01.45-.11.59-.3l2.51-3.23 2.85 2.14.09.06c.32.17.72.09.95-.21Zm2.12-10.98c-.04.25-.06.5-.06.75 0 2.25 1.82 4.07 4.06 4.07.25 0 .49-.03.74-.07v8.07c0 3.39-2 5.4-5.4 5.4H5.4C2 20 0 17.99 0 14.6V7.2c0-3.4 2-5.42 5.4-5.42h8.05Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={20}
        x2={-6.656}
        y1={20}
        y2={17.938}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default ActivityActiveIcon;
