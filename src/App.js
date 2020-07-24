import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import useRouter from "./hooks/useRouter";
import Intro from "./features/Intro/Intro";
import { ImagesProvider } from "./contexts/ImagesContext";

const RemakeEarth = lazy(() => import('./features/RemakeEarth/index'));

const TetrisGame = lazy(() => import('./features/Tetris/TetrisGame'));

const Memory = lazy(() => import('./features/Memory/Memory'));

const AsanasGuessing = lazy(() => import('./features/AsanasGuessing/AsanasGuessing'));

const Match3Yoga = lazy(() => import('./features/Match3Yoga/index'));

const App = props => {
  const { location } = useRouter();
  const transitions = useTransition(location, location => location.pathname, {
    from: {
      opacity: location.pathname !== "/" ? 0 : 1,
      transform: "translateX(0%)"
    },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-20%)", delay: 0 }
  });


  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      <Suspense fallback={""}>
        <Switch location={item}>
          <Route
            path="/Remake"
            exact
            render={props => (
              <ImagesProvider
                r={require.context(
                  "./features/RemakeEarth/quizz-images/",
                  true,
                  /\.(png|jpe?g|svg)$/
                )}
              >
                <RemakeEarth {...props} />
              </ImagesProvider>
            )}
          />
          <Route
            path="/AsanasGuessing"
            exact
            render={props => (
              <ImagesProvider
                r={require.context(
                  "./features/AsanasGuessing/ressources/",
                  true,
                  /\.(png|jpe?g|svg)$/
                )}
              >
                <AsanasGuessing {...props} />
              </ImagesProvider>
            )}
          />
          <Route
            path="/tetris"
            exact
            render={props => (
              <ImagesProvider
                r={require.context(
                  "./features/Tetris/img",
                  false,
                  /\.(png|jpe?g|svg)$/
                )}
              >
                <TetrisGame {...props} />
              </ImagesProvider>
            )}
          />
          <Route
            path="/memory"
            exact
            render={props => (
              <Memory {...props} />
            )}
          />
          <Route
            path="/"
            exact
            render={props => (
              <ImagesProvider
                intro={true}
                r={require.context(
                  "./features/Intro/images/",
                  false,
                  /\.(png|jpe?g|svg)$/
                )}
              >
                <Intro {...props} />
              </ImagesProvider>
            )}
          />

          <Route
            path="/match3"
            exact
            render={props => (
              <ImagesProvider
                r={require.context(
                  "./features/Match3Yoga/res/",
                  true,
                  /\.(png|jpe?g|svg)$/
                )}
              >
                <Match3Yoga {...props} />
              </ImagesProvider>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </animated.div>
  ));
};

export default App;
