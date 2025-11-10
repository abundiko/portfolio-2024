"use client";

import { Databuddy } from "@databuddy/sdk/react";

export function DatabuddyAnalitics() {
  return (
    <>
      <Databuddy
        clientId="p_3K09Os35WJQ77R287d_"
        trackOutgoingLinks={true}
        trackInteractions={true}
        trackScrollDepth={true}
        trackExitIntent={true}
        trackBounceRate={true}
        trackWebVitals={true}
        trackErrors={true}
        enableBatching={true}
      />
    </>
  );
}
