import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { useState } from "react";

export default function CancerForm({ predict }) {
  const [cancerData, setCancerData] = useState({});

  const onSubmit = () => {
    predict(cancerData);
    setCancerData({});
  };
  return (
    <Card className="p-col-8 p-shadow-6">
      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-4">
          <label htmlFor="clumpThickness">Espesor de la masa</label>
          <InputNumber
            inputId="clumpThickness"
            value={cancerData.clumpThickness}
            onChange={({ value }) =>
              setCancerData({ ...cancerData, clumpThickness: value })
            }
            mode="decimal"
            showButtons
            min={1}
            max={10}
          />
        </div>

        <div className="p-field p-col-4">
          <label htmlFor="uniformityOfCellSize">
            {" "}
            Uniformidad del tamaño de la célula
          </label>
          <InputNumber
            inputId="uniformityOfCellSize"
            value={cancerData.uniformityOfCellSize}
            onChange={({ value }) =>
              setCancerData({ ...cancerData, uniformityOfCellSize: value })
            }
            mode="decimal"
            showButtons
            min={1}
            max={10}
          />
        </div>
        <div className="p-field p-col-4">
          <label htmlFor="uniformityOfCellShape">
            Uniformidad de la forma de la célula
          </label>
          <InputNumber
            inputId="uniformityOfCellShape"
            value={cancerData.uniformityOfCellShape}
            onChange={({ value }) =>
              setCancerData({ ...cancerData, uniformityOfCellShape: value })
            }
            mode="decimal"
            showButtons
            min={1}
            max={10}
          />
        </div>

        <div className="p-field p-col-4">
          <label htmlFor="marginalAdhesion">Adhesión marginal</label>
          <InputNumber
            inputId="marginalAdhesion"
            value={cancerData.marginalAdhesion}
            onChange={({ value }) =>
              setCancerData({ ...cancerData, marginalAdhesion: value })
            }
            mode="decimal"
            showButtons
            min={1}
            max={10}
          />
        </div>
        <div className="p-field p-col-4">
          <label htmlFor="singleEpithelialCellSize">
            Tamaño individual de la célula
          </label>
          <InputNumber
            inputId="singleEpithelialCellSize"
            value={cancerData.singleEpithelialCellSize}
            onChange={({ value }) =>
              setCancerData({
                ...cancerData,
                singleEpithelialCellSize: value,
              })
            }
            mode="decimal"
            showButtons
            min={1}
            max={10}
          />
        </div>
        <div className="p-field p-col-4">
          <label htmlFor="bareNuclei">Núcleo</label>
          <InputNumber
            inputId="bareNuclei"
            value={cancerData.bareNuclei}
            onChange={({ value }) =>
              setCancerData({ ...cancerData, bareNuclei: value })
            }
            mode="decimal"
            showButtons
            min={1}
            max={10}
          />
        </div>

        <div className="p-field p-col-4">
          <label htmlFor="blandChromatin">Cromatina Blanda</label>
          <InputNumber
            inputId="blandChromatin"
            value={cancerData.blandChromatin}
            onChange={({ value }) =>
              setCancerData({ ...cancerData, blandChromatin: value })
            }
            mode="decimal"
            showButtons
            min={1}
            max={10}
          />
        </div>
        <div className="p-field p-col-4">
          <label htmlFor="normalNucleoli">Nucleoli normal</label>
          <InputNumber
            inputId="normalNucleoli"
            value={cancerData.normalNucleoli}
            onChange={({ value }) =>
              setCancerData({ ...cancerData, normalNucleoli: value })
            }
            mode="decimal"
            showButtons
            min={1}
            max={10}
          />
        </div>
        <div className="p-field p-col-4">
          <label htmlFor="mitosis">Mitosis</label>
          <InputNumber
            inputId="mitosis"
            value={cancerData.mitosis}
            onChange={({ value }) =>
              setCancerData({ ...cancerData, mitosis: value })
            }
            mode="decimal"
            showButtons
            min={1}
            max={10}
          />
        </div>
        <Button
          type="submit"
          label="Submit"
          className="p-mt-2"
          onClick={onSubmit}
        />
      </div>
    </Card>
  );
}
