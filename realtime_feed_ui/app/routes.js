{
  path: '/feeds',
  name: 'feedsPage',
  getComponent(nextState, cb) {
    const importModules = Promise.all([
      import('containers/FeedsPage/reducer'),
      import('containers/FeedsPage/sagas'),
      import('containers/FeedsPage'),
    ]);
 
    const renderRoute = loadModule(cb);
 
    importModules.then(([reducer, sagas, component]) => {
      injectReducer('feedsPage', reducer.default);
      injectSagas(sagas.default);
 
      renderRoute(component);
    });
 
    importModules.catch(errorLoading);
  },
}