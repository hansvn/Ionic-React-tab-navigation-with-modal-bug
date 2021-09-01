import { IonButton, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './Page1.css';

const Page1: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page 1 in Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton onClick={() => setIsModalOpen(true)}>Show Modal</IonButton>
      </IonContent>
      <IonModal
        isOpen={isModalOpen}
        onDidDismiss={() => setIsModalOpen(false)}
      >
          <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Modal</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent className="preference-modal__content ion-padding">
              <IonButton onClick={() => setIsModalOpen(false)}>Close Modal</IonButton>
            </IonContent>
          </IonPage>
      </IonModal>
    </IonPage>
  );
};

export default Page1;
