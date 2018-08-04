export default {
  'API': {
    'host': 'http://628fdabc.ngrok.io',
    'paths': {
      'server_info': '/server-info',
      'load_database': '/upload',
      'solve_file_options': '/solve',
      'results': '/results'
    }
  },
  'WS': {
    'url': 'ws://628fdabc.ngrok.io'
  },
  'INSAMPLE_MIN_SIZE': 20,
  'STEPS': [
    {
      'label': 'Load database',
      'icon': 'database',
      'component': 'WizardLoadDatabase'
    },
    {
      'label': 'Select variables',
      'icon': 'flask',
      'component': 'WizardSelectVariables'
    },
    {
      'label': 'Settings',
      'icon': 'cog',
      'component': 'WizardSettings'
    },
    {
      'label': 'Processing',
      'icon': 'spinner',
      'component': 'WizardProcessing'
    },
    {
      'label': 'Results',
      'icon': 'clipboard-list',
      'component': 'WizardResults'
    }
  ],
  'CRITERIA': {
    'r2adj': 'Adjusted R²',
    'bic': 'BIC',
    'aic': 'AIC',
    'aicc': 'AIC Corrected',
    'cp': 'Mallows\'s Cp',
    'rmse': 'RMSE',
    'rmseout': 'RMSE OUT',
    'sse': 'SSE'
  },
  'METHODS': {
    'fast': 'Fast',
    'precise': 'Precise'
  }
}
