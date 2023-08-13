import React from "react";
import { LeftSide } from "./LeftSide";
import { Center } from "./Center";
import { Right } from "./Right";
export const Main = () => {
  return (
    <main className="row">
      <section className="col-5 full-left-side">
        <LeftSide />
      </section>
      <section className="col-8 d-flex center-and-right">
      <section className="full-center">

        <Center />
      </section>
      <section className="full-right">
        <Right/>
      </section>
      </section>
      
    </main>
  );
};
