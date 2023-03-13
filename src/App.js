import "./App.css";
import {
  ScrollControls,
  Scroll,
  Environment,
  Float,
  Sparkles,
} from "@react-three/drei";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Butterfly } from "./models/Butterfly";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
  Vignette,
} from "@react-three/postprocessing";

function App() {
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <spotLight
        position={[0, 25, 0]}
        angle={1.3}
        penumbra={1}
        castShadow
        intensity={2}
        shadowBias={-0.0001}
      />
      <ambientLight intensity={1} />
      <spotLight
        position={[0, 25, 0]}
        angle={1.3}
        penumbra={1}
        castShadow
        intensity={2}
        shadowBias={-0.0001}
      />
      <Environment preset="warehouse" />
      <EffectComposer>
        <Bloom
          intensity={2}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          height={1000}
        />
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={5}
          height={400}
        />
        <Vignette eskil={false} offset={0.1} darkness={1.5} />
      </EffectComposer>

      <ScrollControls pages={6} damping={0.25}>
        <Scroll>
          {/* arriba */}
          <Float
            speed={1}
            rotationIntensity={2}
            floatIntensity={0.2}
            floatingRange={[1.1]}
          >
            <Butterfly scale={0.05} position={[-10, -3, -6]} />
            <Butterfly scale={0.05} position={[0, -2.5, 0]} />
            <Butterfly scale={0.05} position={[10, -4, -10]} />
          </Float>

          {/* medio */}
          <Float
            speed={1}
            rotationIntensity={2}
            floatIntensity={0.2}
            floatingRange={[1.1]}
          >
            <Butterfly scale={0.05} position={[-1, -12.5, 0]} />
            <Butterfly scale={0.05} position={[12, -14.5, -10]} />
          </Float>

          {/* abajo */}
          <Float
            speed={1}
            rotationIntensity={2}
            floatIntensity={0.2}
            floatingRange={[1.1]}
          >
            <Butterfly scale={0.05} position={[-3, -19.5, 2]} />
            <Butterfly scale={0.05} position={[8, -23, -10]} />
            <Butterfly scale={0.05} position={[4, -24, -2]} />
          </Float>

          {/* particulas */}

          <Sparkles
            noise={0}
            count={500}
            speed={0.01}
            size={0.6}
            color={"#6fa8dc"}
            opacity={10}
            scale={[20, 100, 20]}
          ></Sparkles>
          <Sparkles
            noise={0}
            count={50}
            speed={0.01}
            size={10}
            color={"#FFF"}
            opacity={2}
            scale={[30, 100, 10]}
          ></Sparkles>
        </Scroll>

        <Scroll html style={{ width: "100%" }}>
          <Container style={{ position: "relative" }}>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px",
                left: "0px",
              }}
            >
              <Col md={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                    La vida puede llegar a ser dificil
                  </h1>
                </div>
              </Col>
            </Row>

            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px",
                top: "100vh",
                left: "0px",
              }}
            >
              <Col md={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                    A veces te podes sentir perdido, perdida.
                  </h1>
                </div>
              </Col>
            </Row>

            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
                top: "200vh",
              }}
            >
              <Col md={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>Abrumado, abrumada</h1>
                  <h1 style={{ marginBottom: "0px" }}>O vacio por dentro</h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
                top: "300vh",
              }}
            >
              <Col md={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                    A la deriva por la vida, <br /> <br />
                    sin ayuda ni guia.
                  </h1>
                </div>
              </Col>
            </Row>

            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
                top: "400vh",
              }}
            >
              <Col s={8}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                    Pero hay esperanza...
                    <br /> <br /> y hay personas que pueden ayudarte.
                  </h1>
                </div>
              </Col>
            </Row>

            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
                top: "500vh",
              }}
            >
              <Col md={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                    Es tiempo de que obtengas
                    <br /> la ayuda que necesitas.
                  </h1>
                  <h2 style={{ marginBottom: "30px", marginTop: "-20px" }}>
                    <br /> Para recuperar tu vida de vuelta.
                    <br />
                    <br />
                  </h2>
                  <Button
                    variant="outline-light"
                    size="lg"
                    href="http://www.sosunamigoanonimo.com.ar/"
                    target="_blank"
                  >
                    Conseguí ayuda ahora
                  </Button>{" "}
                </div>
              </Col>
            </Row>
          </Container>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
