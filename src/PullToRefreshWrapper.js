import React from "react";
import { useHistory } from "react-router-dom";
import { PullToRefresh } from "react-js-pull-to-refresh";
import {
  PullDownContent,
  ReleaseContent,
  RefreshContent,
} from "react-js-pull-to-refresh";

function PullToRefreshWrapper(props) {
  let history = useHistory();
  function handleLoad() {
    console.log("reload");
  }

  return (
    <PullToRefresh
      pullDownContent={<PullDownContent />}
      releaseContent={<ReleaseContent />}
      pullDownThreshold={200}
      onRefresh={handleLoad}
      triggerHeight={100}
      backgroundColor="#DF1882"
    >
      {props.children}
    </PullToRefresh>
  );
}

export default PullToRefreshWrapper;
