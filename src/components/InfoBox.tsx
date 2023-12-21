import { type ReactNode } from "react";

type HintBoxType = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxType = {
  mode: "warning";
  children: ReactNode;
  severity?: "low" | "medium" | "high";
};

type InfoBoxType = HintBoxType | WarningBoxType;

export default function InfoBox(props: InfoBoxType) {
  const { mode, children } = props;
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h1>Warning</h1>
      <p>{props.children}</p>
    </aside>
  );
}
