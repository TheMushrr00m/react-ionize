declare module 'electron' {
  declare type $SupportedAppEvent = (
    'ready'
  );
  declare type ElectronApp = {|
    on: ($SupportedAppEvent, Function) => ElectronApp,
  |};

  declare var exports: {
    app: ElectronApp
  };
};