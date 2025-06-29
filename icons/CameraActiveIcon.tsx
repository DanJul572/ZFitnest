import Svg, {
  Defs,
  LinearGradient,
  Path,
  Stop,
  SvgProps,
} from 'react-native-svg';

const CameraActiveIcon = (props: SvgProps) => (
  <Svg width={20} height={18} fill="none" {...props}>
    <Path
      fill="url(#a)"
      fillRule="evenodd"
      d="M15.44 3.236c.04.07.11.12.2.12 2.4 0 4.36 1.958 4.36 4.355v5.934A4.368 4.368 0 0 1 15.64 18H4.36A4.361 4.361 0 0 1 0 13.645V7.71a4.361 4.361 0 0 1 4.36-4.355c.08 0 .16-.04.19-.12l.06-.12.106-.222a97.79 97.79 0 0 1 .714-1.486C5.89.51 6.67.01 7.64 0h4.71c.97.01 1.76.51 2.22 1.408.157.315.397.822.629 1.31l.141.299.1.22Zm-.73 3.836c0 .5.4.9.9.9s.91-.4.91-.9-.41-.909-.91-.909-.9.41-.9.91ZM8.27 8.62c.47-.47 1.08-.719 1.73-.719.65 0 1.26.25 1.72.71.46.459.71 1.068.71 1.717A2.438 2.438 0 0 1 10 12.756c-.65 0-1.26-.25-1.72-.71a2.408 2.408 0 0 1-.71-1.717v-.01c-.01-.63.24-1.24.7-1.699Zm4.5 4.485a3.91 3.91 0 0 1-2.77 1.15 3.921 3.921 0 0 1-3.93-3.926 3.864 3.864 0 0 1 1.14-2.767A3.921 3.921 0 0 1 10 6.402c1.05 0 2.04.41 2.78 1.15.74.749 1.15 1.738 1.15 2.777a3.958 3.958 0 0 1-1.16 2.776Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={20}
        x2={-6.619}
        y1={18}
        y2={15.711}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default CameraActiveIcon;
