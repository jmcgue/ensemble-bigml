import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Knob } from "primereact/knob";
import { ProgressSpinner } from "primereact/progressspinner";

import CancerForm from "./components/cancer-form/cancer-form";

import postPredict from "./services/bigml-api";

function App() {
  const [showResponse, setShowResponse] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showLoad, setShowLoad] = useState(false);
  const [response, setResponse] = useState({ confidence: -1, output: -1 });

  const predict = (cancerData) => {
    setShowLoad(true);
    postPredict(cancerData)
      .then(({ data }) => {
        setResponse(data);
        setShowResponse(true);
      })
      .catch((err) => {
        console.log(err);
        setShowError(true);
      })
      .finally(() => {
        setShowLoad(false);
      });
  };

  const getLoad = () => {
    return (
      <Dialog
        modal
        visible={showLoad}
        closable={false}
        onHide={() => console.log("cerrando load ...")}
      >
        <div className="card p-col-6 p-col-align-center">
          <ProgressSpinner
            style={{ width: "50px", height: "50px" }}
            strokeWidth="8"
            fill="#EEEEEE"
            animationDuration=".75s"
          />
        </div>
      </Dialog>
    );
  };
  const getResponse = () => {
    return (
      <Dialog
        draggable={false}
        modal
        header="Resultados de BigML"
        visible={showResponse}
        onHide={() => setShowResponse(false)}
        breakpoints={{ "960px": "75vw" }}
        style={{ width: "50vw" }}
      >
        <div className="p-grid p-justify-around p-aligne-center p-text-center">
          <div className="p-col">
            <h5 className="p-mt-3">Confidencia</h5>
            <Knob
              value={parseFloat(response.confidence.toFixed(3))}
              max={4}
              size={150}
            />
          </div>
          <div className="p-col">
            <h5 className="p-mt-3">Cancer Maligno</h5>
            <Knob
              value={parseFloat(((response.output - 2) / 2).toFixed(3))}
              max={1}
              size={150}
            />
          </div>
        </div>
      </Dialog>
    );
  };
  const getError = () => {
    return (
      <Dialog
        header="Error"
        modal
        visible={showError}
        onHide={() => setShowError(false)}
      >
        <p>
          Ah ocurrido un error mientras se realizaba la operación porfavor
          vuelva a intentarlo en unos minutos, si el problema persiste "F".
        </p>
      </Dialog>
    );
  };

  return (
      <div className="p-grid p-align-center p-justify-center p-m-auto" style={{height: "100vh"}}>
        <CancerForm predict={predict} />
        {getLoad()}
        {getResponse()}
        {getError()}
      </div>
  );
}

export default App;
