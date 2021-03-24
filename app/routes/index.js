import {Route, PureContainer, Sandbox} from "cx/widgets";

import AppLayout from "../layout";
import Default from "./default";
import About from "./about";
import Test from "./test";
import Add from "./add"

export default <cx>
    <PureContainer outerLayout={AppLayout}>
        <Sandbox key-bind="url" storage-bind="pages">
            <Route url-bind="url" route="~/">
                <Default />
            </Route>
            <Route url-bind="url" route="~/about">
                <About />
            </Route>
            <Route url-bind="url" route="~/test">
                <Test />
            </Route>
            <Route url-bind="url" route="~/add">
                <Add />
            </Route>
            
        </Sandbox>
    </PureContainer>
</cx>