import React, { Component } from "react";
import Loading from "./Loading";
import Panel from "./Panel";

import classnames from "classnames";

const data = [
  {
    id: 1,
    label: "Total Photos",
    value: 10
  },
  {
    id: 2,
    label: "Total Topics",
    value: 4
  },
  {
    id: 3,
    label: "User with the most uploads",
    value: "Allison Saeng"
  },
  {
    id: 4,
    label: "User with the least uploads",
    value: "Lukas Souza"
  }
];

class Dashboard extends Component {
  state = {
    loading: false
  };

  render() {
    const dashboardClasses = classnames("dashboard");

    if (this.state.loading) {
      return <Loading />;
    }

    // Map over the data array and create a Panel component for each item
    const panels = data.map((panel) => (
      <Panel
        key={panel.id} // Use panel.id as the key
        id={panel.id} // Pass panel.id as a prop
        label={panel.label} // Pass panel.label as a prop
        value={panel.value} // Pass panel.value as a prop
      />
    ));

    return (<main className={dashboardClasses}>
      {panels}
    </main>
    );
  }
}

export default Dashboard;
