import LoadingContextType from '@/constants/models/LoadingContextType';
import styles from '@/styles/LoadingContextStyle';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { View, ActivityIndicator, Modal } from 'react-native';


const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading deve ser usado dentro de um LoadingProvider');
  }
  return context;
};

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState(false);

  const showLoading = () => setVisible(true);
  const hideLoading = () => setVisible(false);

  return (
    <LoadingContext.Provider value={{ showLoading, hideLoading }}>
      {children}
      <Modal transparent visible={visible} animationType="fade">
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="#4CAF50" />
        </View>
      </Modal>
    </LoadingContext.Provider>
  );
};

