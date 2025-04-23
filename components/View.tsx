import { View as RNView, ViewProps as RNViewProps } from 'react-native';

interface ViewProps extends RNViewProps {
  className?: string;
}

export function View({ className = '', ...props }: ViewProps) {
  return <RNView className={className} {...props} />;
} 