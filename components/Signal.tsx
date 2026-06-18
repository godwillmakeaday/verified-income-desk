import { SignalKind, signalLabels } from "@/lib/site";

const classMap: Record<SignalKind, string> = {
  verified: "signal-verified",
  test: "signal-test",
  caution: "signal-caution",
  flag: "signal-flag",
};

export default function Signal({
  kind,
  label,
}: {
  kind: SignalKind;
  label?: string;
}) {
  return (
    <span className={`signal ${classMap[kind]}`}>
      {label ?? signalLabels[kind]}
    </span>
  );
}
