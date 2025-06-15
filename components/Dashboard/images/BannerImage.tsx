import * as React from 'react';
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Mask,
  Path,
  Rect,
  Stop,
  SvgProps,
} from 'react-native-svg';

const BannerImage = (props: SvgProps) => (
  <Svg width={359} height={190} fill="none" {...props}>
    <G filter="url(#a)">
      <Rect width={315} height={146} x={22} y={12} fill="url(#b)" rx={22} />
    </G>
    <Mask
      id="d"
      width={315}
      height={146}
      x={22}
      y={12}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <Rect width={315} height={146} x={22} y={12} fill="url(#c)" rx={22} />
    </Mask>
    <G fill="#fff" mask="url(#d)">
      <Circle cx={322} cy={135} r={25} opacity={0.2} />
      <Circle cx={28} cy={151} r={25} opacity={0.2} />
      <Circle cx={193} cy={38} r={4} opacity={0.2} />
      <Circle cx={158} cy={122} r={4} opacity={0.2} />
      <Circle cx={135} cy={28} r={4} opacity={0.2} />
      <Circle cx={201} cy={143} r={4} opacity={0.2} />
    </G>
    <G filter="url(#e)">
      <Circle cx={264} cy={85} r={44} fill="#fff" />
    </G>
    <G filter="url(#f)">
      <Path
        fill="url(#g)"
        d="M311 85c2.883 0 4.324 0 5.219-1.002.895-1.002.744-2.33.442-4.985a53.011 53.011 0 0 0-18.479-34.517 53.004 53.004 0 0 0-37.133-12.414c-2.668.149-4.002.223-4.84 1.274-.837 1.05-.595 2.471-.11 5.313l7.05 41.34c.406 2.384.61 3.576 1.448 4.284.838.707 2.047.707 4.466.707H311Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={337}
        x2={-73.891}
        y1={158}
        y2={89.401}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={337}
        x2={-73.891}
        y1={158}
        y2={89.401}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={317}
        x2={175.724}
        y1={138}
        y2={127.068}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default BannerImage;
