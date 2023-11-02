import React, { useState } from "react";
import "./App.css";

import {
  Modal,
  ModalContent,
  ModalTitle,
  ModalFooter,
  Paragraph,
  SingleSelect,
  SingleSelectData,
} from "suomifi-ui-components";

const items: SingleSelectData[] = [
  { labelText: "foo", uniqueItemId: "foo" },
  { labelText: "open modal", uniqueItemId: "open modal" },
];

function App() {
  const [selectedItem, setSelectedItem] = useState<SingleSelectData | null>(
    null,
  );

  const isModalVisible = selectedItem?.uniqueItemId === "open modal";

  return (
    <div className="App">
      <SingleSelect
        items={items}
        clearButtonLabel="something"
        labelText='Select "open modal" from select'
        itemAdditionHelpText="something"
        ariaOptionsAvailableText="something"
        onItemSelectionChange={setSelectedItem}
        selectedItem={selectedItem}
      />
      <Modal appElementId="root" visible={isModalVisible}>
        <ModalContent>
          <ModalTitle>Modal example</ModalTitle>
          <Paragraph>Some text</Paragraph>
        </ModalContent>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
