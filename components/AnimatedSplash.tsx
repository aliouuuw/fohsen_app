import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Dimensions, Animated, Easing } from 'react-native';
import { Text } from '@/components/Text';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

type AnimatedSplashProps = {
  isAppReady: boolean;
  onAnimationComplete: () => void;
};

export const AnimatedSplash: React.FC<AnimatedSplashProps> = ({ 
  isAppReady, 
  onAnimationComplete 
}) => {
  const insets = useSafeAreaInsets();

  // Animation references
  const containerOpacity = useRef(new Animated.Value(1)).current;
  const logoScale = useRef(new Animated.Value(0.8)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const squaresOpacity = useRef(new Animated.Value(0)).current;
  const squaresTranslate = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    if (isAppReady) {
        // Phase 1: Animate logo appearance with pulsing effect
        Animated.sequence([
            Animated.timing(logoOpacity, {
            toValue: 1,
            duration: 1200, // Increased from 800
            useNativeDriver: true,
            easing: Easing.out(Easing.ease),
            }),
            Animated.timing(logoScale, {
            toValue: 1,
            duration: 900, // Increased from 600
            useNativeDriver: true,
            easing: Easing.out(Easing.ease),
            }),
            Animated.delay(400), // Increased from 200
        ]).start();

        // Phase 2: Animate square particles
        Animated.sequence([
            Animated.delay(900), // Increased from 600
            Animated.parallel([
                Animated.timing(squaresOpacity, {
                toValue: 1,
                duration: 900, // Increased from 600
                useNativeDriver: true,
                }),
                Animated.timing(squaresTranslate, {
                toValue: 0,
                duration: 1000, // Increased from 700
                useNativeDriver: true,
                easing: Easing.out(Easing.ease),
                }),
            ]),
            Animated.delay(1500), // Increased from 1000
        ]).start();

        // Phase 3: Fade out the splash screen
        Animated.sequence([
            Animated.delay(3600), // Increased from 2400
            Animated.timing(containerOpacity, {
                toValue: 0,
                duration: 600, // Increased from 400
                useNativeDriver: true,
                easing: Easing.out(Easing.ease),
            }),
        ]).start(() => {
            onAnimationComplete();
        });
    }
  }, [isAppReady]);

  return (
    <Animated.View 
      style={[
        styles.container, 
        { opacity: containerOpacity, paddingTop: insets.top, paddingBottom: insets.bottom }
      ]}
    >
      <View style={styles.contentContainer}>
        <Animated.View
          style={[
            styles.logoContainer,
            {
              opacity: logoOpacity,
              transform: [{ scale: logoScale }],
            },
          ]}
        >
          <Image
            source={require('@/assets/images/keursante_logo.jpeg')}
            style={styles.logo}
            resizeMode="contain"
          />
        </Animated.View>

        <Animated.View
          style={[
            styles.squaresContainer,
            {
              opacity: squaresOpacity,
              transform: [{ translateY: squaresTranslate }],
            },
          ]}
        >
          {/* Decorative squares mimicking the logo's design */}
          <View style={[styles.square, { top: 10, right: 10, width: 15, height: 15 }]} />
          <View style={[styles.square, { top: 30, right: 30, width: 10, height: 10 }]} />
          <View style={[styles.square, { top: 15, right: 50, width: 12, height: 12 }]} />
          <View style={[styles.square, { top: 40, right: 15, width: 8, height: 8 }]} />
          <View style={[styles.square, { top: 50, right: 40, width: 15, height: 15 }]} />
        </Animated.View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width,
    height,
    backgroundColor: '#006837', // Green color from the logo
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  squaresContainer: {
    position: 'absolute',
    width: 200,
    height: 200,
  },
  square: {
    position: 'absolute',
    backgroundColor: 'white',
  },
  appName: {
    marginTop: 20,
    fontSize: 34,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
}); 