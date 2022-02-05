import React, { ReactElement } from 'react';
import { ErrorComponent } from './ErrorComponent';

type StateType = {
  hasError: boolean;
};

type StateProps = {
  children: ReactElement | ReactElement[];
};

export class ErrorBoundary extends React.Component<StateProps, StateType> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(/* error */): StateType {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(/* error, errorInfo */): void {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      // You can render any custom fallback UI
      return <ErrorComponent />;
    }

    return children;
  }
}
