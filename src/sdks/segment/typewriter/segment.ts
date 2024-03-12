// This client was automatically generated by Segment Typewriter. ** Do Not Edit **
// To update this file, run:
//   npx typewriter

/**
 * Event used by Integrations for tracking a saved config
 */
export interface ConfigSaved {
  /**
   * The action performed on the config page
   */
  action: Action;
  /**
   * Key of the app that the action was taken in.
   */
  app_key: string;
  /**
   * Name of the app that the action was taken in.
   */
  app_name?: string;
  /**
   * The environment in which the app is used.
   */
  environment_key: string;
  /**
   * Metadata of the event
   */
  metadata?: { [key: string]: any };
  /**
   * The organization owning the space in which the app is used.
   */
  organization_key: string;
  /**
   * The space in which the app is used.
   */
  space_key: string;
  [property: string]: any;
}

/**
 * The action performed on the config page
 */
export enum Action {
  Added = 'added',
  Cancelled = 'cancelled',
  Deleted = 'deleted',
  Installed = 'installed',
  Updated = 'updated',
}

/**
 * Event used by Integrations for tracking the start of a flow in the AI Content Generator
 */
export interface FlowStart {
  /**
   * AI model used for the action.
   */
  ai_model: string;
  /**
   * Service provider of the AI model used for the action.
   */
  ai_provider: string;
  /**
   * Key of the app that the action was taken in.
   */
  app_key: string;
  /**
   * Name of the app that the action was taken in.
   */
  app_name?: string;
  /**
   * Config options that have been filled out for the action.
   */
  config_options: FlowStartConfigOptions;
  /**
   * Content type ID for the entry currently being edited.
   */
  content_type_id: string;
  /**
   * Entry ID for the entry currently being edited.
   */
  entry_id: string;
  /**
   * The environment in which the app is used.
   */
  environment_key: string;
  /**
   * The corresponding ID of the current feature. See
   * https://github.com/contentful/apps/blob/master/apps/ai-content-generator/src/configs/features/featureConfig.tsx#L9
   */
  feature_id: string;
  /**
   * The organization owning the space in which the app is used.
   */
  organization_key: string;
  /**
   * The space in which the app is used.
   */
  space_key: string;
  [property: string]: any;
}

/**
 * Config options that have been filled out for the action.
 */
export interface FlowStartConfigOptions {
  has_additional?: boolean;
  has_audience?: boolean;
  has_exclude?: boolean;
  has_include?: boolean;
  has_profile?: boolean;
  has_tone?: boolean;
  has_values?: boolean;
  [property: string]: any;
}

/**
 * Event used by Integrations for tracking clicks on the generate button
 */
export interface GenerateClicked {
  /**
   * AI model used for the action.
   */
  ai_model: string;
  /**
   * Service provider of the AI model used for the action.
   */
  ai_provider: string;
  /**
   * Key of the app that the action was taken in.
   */
  app_key: string;
  /**
   * Name of the app that the action was taken in.
   */
  app_name?: string;
  /**
   * Config options that have been filled out for the action.
   */
  config_options: GenerateClickedConfigOptions;
  /**
   * The text of the prompt that was submitted. This will not include any text from a source
   * field.
   */
  content_generation_prompt?: string;
  /**
   * Content type ID for the entry currently being edited.
   */
  content_type_id: string;
  /**
   * Entry ID for the entry currently being edited.
   */
  entry_id: string;
  /**
   * The environment in which the app is used.
   */
  environment_key: string;
  /**
   * The corresponding ID of the current feature. See
   * https://github.com/contentful/apps/blob/master/apps/ai-content-generator/src/configs/features/featureConfig.tsx#L9
   */
  feature_id: string;
  /**
   * Whether the action was performed using a prompt instead of a source.
   */
  from_prompt?: boolean;
  /**
   * The organization owning the space in which the app is used.
   */
  organization_key: string;
  /**
   * Name of source field.
   */
  source_field?: string;
  /**
   * The space in which the app is used.
   */
  space_key: string;
  /**
   * Target locale of the action.
   */
  target_locale?: string;
  [property: string]: any;
}

/**
 * Config options that have been filled out for the action.
 */
export interface GenerateClickedConfigOptions {
  has_additional?: boolean;
  has_audience?: boolean;
  has_exclude?: boolean;
  has_include?: boolean;
  has_profile?: boolean;
  has_tone?: boolean;
  has_values?: boolean;
  [property: string]: any;
}

/**
 * Event used by Integrations for tracking when the user edits the generated content
 */
export interface GeneratedContentEdited {
  /**
   * AI model used for the action.
   */
  ai_model: string;
  /**
   * Service provider of the AI model used for the action.
   */
  ai_provider: string;
  /**
   * Key of the app that the action was taken in.
   */
  app_key: string;
  /**
   * Name of the app that the action was taken in.
   */
  app_name?: string;
  /**
   * Config options that have been filled out for the action.
   */
  config_options: GeneratedContentEditedConfigOptions;
  /**
   * The text of the prompt that was submitted. This will not include any text from a source
   * field.
   */
  content_generation_prompt?: string;
  /**
   * Content type ID for the entry currently being edited.
   */
  content_type_id: string;
  /**
   * Entry ID for the entry currently being edited.
   */
  entry_id: string;
  /**
   * The environment in which the app is used.
   */
  environment_key: string;
  /**
   * The corresponding ID of the current feature. See
   * https://github.com/contentful/apps/blob/master/apps/ai-content-generator/src/configs/features/featureConfig.tsx#L9
   */
  feature_id: string;
  /**
   * Whether the action was performed using a prompt instead of a source.
   */
  from_prompt?: boolean;
  /**
   * The organization owning the space in which the app is used.
   */
  organization_key: string;
  /**
   * Source locale of the action.
   */
  source_locale?: string;
  /**
   * The space in which the app is used.
   */
  space_key: string;
  /**
   * Target locale of the action.
   */
  target_locale?: string;
  [property: string]: any;
}

/**
 * Config options that have been filled out for the action.
 */
export interface GeneratedContentEditedConfigOptions {
  has_additional?: boolean;
  has_audience?: boolean;
  has_exclude?: boolean;
  has_include?: boolean;
  has_profile?: boolean;
  has_tone?: boolean;
  has_values?: boolean;
  [property: string]: any;
}

/**
 * Event used by Integrations for tracking the regeneration of content
 */
export interface RegenerationClicked {
  /**
   * AI model used for the action.
   */
  ai_model: string;
  /**
   * Service provider of the AI model used for the action.
   */
  ai_provider: string;
  /**
   * Key of the app that the action was taken in.
   */
  app_key: string;
  /**
   * Name of the app that the action was taken in.
   */
  app_name?: string;
  /**
   * Config options that have been filled out for the action.
   */
  config_options?: RegenerationClickedConfigOptions;
  /**
   * The text of the prompt that was submitted. This will not include any text from a source
   * field.
   */
  content_generation_prompt?: string;
  /**
   * Content type ID for the entry currently being edited.
   */
  content_type_id: string;
  /**
   * Entry ID for the entry currently being edited.
   */
  entry_id: string;
  /**
   * The environment in which the app is used.
   */
  environment_key: string;
  /**
   * The corresponding ID of the current feature. See
   * https://github.com/contentful/apps/blob/master/apps/ai-content-generator/src/configs/features/featureConfig.tsx#L9
   */
  feature_id?: string;
  /**
   * Whether the action was performed using a prompt instead of a source.
   */
  from_prompt?: boolean;
  /**
   * The organization owning the space in which the app is used.
   */
  organization_key: string;
  /**
   * Name of source field.
   */
  source_field?: string;
  /**
   * The space in which the app is used.
   */
  space_key: string;
  /**
   * Target locale of the action.
   */
  target_locale?: string;
  [property: string]: any;
}

/**
 * Config options that have been filled out for the action.
 */
export interface RegenerationClickedConfigOptions {
  has_additional?: boolean;
  has_audience?: boolean;
  has_exclude?: boolean;
  has_include?: boolean;
  has_profile?: boolean;
  has_tone?: boolean;
  has_values?: boolean;
  [property: string]: any;
}

/**
 * Event used by Integrations for tracking when the sidebar renders
 */
export interface SidebarRendered {
  /**
   * AI model used for the action.
   */
  ai_model: string;
  /**
   * Service provider of the AI model used for the action.
   */
  ai_provider: string;
  /**
   * Key of the app that the action was taken in.
   */
  app_key: string;
  /**
   * Name of the app that the action was taken in.
   */
  app_name?: string;
  /**
   * Config options that have been filled out for the action.
   */
  config_options: SidebarRenderedConfigOptions;
  /**
   * Content type ID for the entry currently being edited.
   */
  content_type_id: string;
  /**
   * Entry ID for the entry currently being edited.
   */
  entry_id: string;
  /**
   * The environment in which the app is used.
   */
  environment_key: string;
  /**
   * The organization owning the space in which the app is used.
   */
  organization_key: string;
  /**
   * The space in which the app is used.
   */
  space_key: string;
  [property: string]: any;
}

/**
 * Config options that have been filled out for the action.
 */
export interface SidebarRenderedConfigOptions {
  has_additional?: boolean;
  has_audience?: boolean;
  has_exclude?: boolean;
  has_include?: boolean;
  has_profile?: boolean;
  has_tone?: boolean;
  has_values?: boolean;
  [property: string]: any;
}

/**
 * Ajv is a peer dependency for development builds. It's used to apply run-time validation
 * to message payloads before passing them on to the underlying analytics instance.
 *
 * Note that the production bundle does not depend on Ajv.
 *
 * You can install it with: `npm install --save-dev ajv`.
 */
import Ajv, { ErrorObject } from 'ajv';

/**
 * The analytics.js snippet should be available via window.analytics.
 * You can install it by following instructions at: https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/
 * Make sure to also include the TypeScript declarations with: `npm install @segment/analytics-next` (install with --save-dev for type definitions only).
 *
 * If you don't want to use the snippet, you can also install the `@segment/analytics-next` library as a *production* dependency and use it like this:
 * ```ts
 * import { AnalyticsBrowser } from '@segment/analytics-next'
 * import { setTypewriterOptions } from './analytics'
 *
 * const analytics = AnalyticsBrowser.load({ writeKey: 'SEGMENT_WRITE_KEY' })
 *
 * setTypewriterOptions({ analytics: analytics })
 */
import type {
  AnalyticsSnippet,
  Analytics,
  AnalyticsBrowser,
  Options,
} from '@segment/analytics-next';

declare global {
  interface Window {
    analytics: AnalyticsSnippet;
  }
}

type AnyAnalytics = AnalyticsSnippet | Analytics | AnalyticsBrowser;

/** The callback exposed by analytics.js. */
export type Callback = () => void;

export type ViolationHandler = (message: Record<string, any>, violations: ErrorObject[]) => void;

/**
 * The default handler that is fired if none is supplied with setTypewriterOptions.
 * This handler will log a warning message to the console.
 */
export const defaultValidationErrorHandler: ViolationHandler = (message, violations) => {
  const msg = JSON.stringify(
    {
      type: 'Typewriter JSON Schema Validation Error',
      description:
        `You made an analytics call (${message.event}) using Typewriter that doesn't match the ` +
        'Tracking Plan spec.',
      errors: violations,
    },
    undefined,
    2
  );

  console.warn(msg);
};

let onViolation = defaultValidationErrorHandler;

let analytics: () => AnyAnalytics | undefined = () => {
  return window.analytics;
};

/** Options to customize the runtime behavior of a Typewriter client. */
export interface TypewriterOptions {
  /**
   * Underlying analytics instance where analytics calls are forwarded on to.
   * Defaults to window.analytics.
   */
  analytics?: AnyAnalytics;
  /**
   * Handler fired when if an event does not match its spec. This handler
   * does not fire in production mode, because it requires inlining the full
   * JSON Schema spec for each event in your Tracking Plan.
   *
   * By default, it will throw errors if NODE_ENV = "test" so that tests will fail
   * if a message does not match the spec. Otherwise, errors will be logged to stderr.
   */
  onViolation?: ViolationHandler;
}

/**
 * Updates the run-time configuration of this Typewriter client.
 *
 * @param {TypewriterOptions} options - the options to upsert
 *
 * @typedef {Object} TypewriterOptions
 * @property {AnyAnalytics} [analytics] - Underlying analytics instance where analytics
 * 		calls are forwarded on to. Defaults to window.analytics.
 * @property {Function} [onViolation] - Handler fired when if an event does not match its spec. This handler does not fire in
 * 		production mode, because it requires inlining the full JSON Schema spec for each event in your Tracking Plan. By default,
 * 		it will throw errors if NODE_ENV="test" so that tests will fail if a message does not match the spec. Otherwise, errors
 * 		will be logged to stderr.
 */
export function setTypewriterOptions(options: TypewriterOptions) {
  analytics = options.analytics ? () => options.analytics || window.analytics : analytics;
  onViolation = options.onViolation || onViolation;
}

/**
 * Validates a message against a JSON Schema using Ajv. If the message
 * is invalid, the `onViolation` handler will be called.
 */
function validateAgainstSchema(message: Record<string, any>, schema: object) {
  const ajv = new Ajv({ allErrors: true, verbose: true });

  if (!ajv.validate(schema, message) && ajv.errors) {
    onViolation(message, ajv.errors);
  }
}

/**
 * Helper to attach metadata on Typewriter to outbound requests.
 * This is used for attribution and debugging by the Segment team.
 */
function withTypewriterContext(message: Options = {}): Options {
  return {
    ...message,
    context: {
      ...(message.context || {}),
      typewriter: {
        language: 'typescript',
        version: '9.1.0',
      },
    },
  };
}

/**
 * Fires a 'ConfigSaved' track call.
 *
 * @param ConfigSaved props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 	call is fired.
 */
export function configSaved(props: ConfigSaved, options?: Options, callback?: Callback): void {
  const schema = {
    $id: 'config_saved',
    description: 'Event used by Integrations for tracking a saved config',
    properties: {
      action: {
        $id: '/properties/action',
        description: 'The action performed on the config page',
        enum: ['added', 'cancelled', 'deleted', 'installed', 'updated'],
        type: 'string',
      },
      app_key: {
        $id: '/properties/app_key',
        description: 'Key of the app that the action was taken in.',
        type: 'string',
      },
      app_name: {
        $id: '/properties/app_name',
        description: 'Name of the app that the action was taken in.',
        type: 'string',
      },
      environment_key: {
        $id: '/properties/environment_key',
        description: 'The environment in which the app is used.',
        type: 'string',
      },
      metadata: {
        $id: '/properties/metadata',
        description: 'Metadata of the event',
        type: 'object',
      },
      organization_key: {
        $id: '/properties/organization_key',
        description: 'The organization owning the space in which the app is used.',
        type: 'string',
      },
      space_key: {
        $id: '/properties/space_key',
        description: 'The space in which the app is used.',
        type: 'string',
      },
    },
    required: ['action', 'app_key', 'environment_key', 'organization_key', 'space_key'],
    type: 'object',
  };
  validateAgainstSchema(props, schema);

  const a = analytics();
  if (a) {
    a.track(
      'config_saved',
      props || {},
      {
        ...options,
        context: {
          ...(options?.context || {}),
          typewriter: {
            language: 'typescript',
            version: '',
          },
        },
      },
      callback
    );
  }
}
/**
 * Fires a 'FlowStart' track call.
 *
 * @param FlowStart props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 	call is fired.
 */
export function flowStart(props: FlowStart, options?: Options, callback?: Callback): void {
  const schema = {
    $id: 'flow_start',
    description:
      'Event used by Integrations for tracking the start of a flow in the AI Content Generator',
    properties: {
      ai_model: { description: 'AI model used for the action.', type: 'string' },
      ai_provider: {
        description: 'Service provider of the AI model used for the action.',
        type: 'string',
      },
      app_key: { description: 'Key of the app that the action was taken in.', type: 'string' },
      app_name: { description: 'Name of the app that the action was taken in.', type: 'string' },
      config_options: {
        description: 'Config options that have been filled out for the action.',
        properties: {
          has_additional: { description: '', type: 'boolean' },
          has_audience: { description: '', type: 'boolean' },
          has_exclude: { description: '', type: 'boolean' },
          has_include: { description: '', type: 'boolean' },
          has_profile: { description: '', type: 'boolean' },
          has_tone: { description: '', type: 'boolean' },
          has_values: { description: '', type: 'boolean' },
        },
        type: 'object',
      },
      content_type_id: {
        description: 'Content type ID for the entry currently being edited.',
        type: 'string',
      },
      entry_id: { description: 'Entry ID for the entry currently being edited.', type: 'string' },
      environment_key: { description: 'The environment in which the app is used.', type: 'string' },
      feature_id: {
        description:
          'The corresponding ID of the current feature. See https://github.com/contentful/apps/blob/master/apps/ai-content-generator/src/configs/features/featureConfig.tsx#L9',
        type: 'string',
      },
      organization_key: {
        description: 'The organization owning the space in which the app is used.',
        type: 'string',
      },
      space_key: { description: 'The space in which the app is used.', type: 'string' },
    },
    required: [
      'app_key',
      'environment_key',
      'organization_key',
      'space_key',
      'content_type_id',
      'entry_id',
      'ai_model',
      'ai_provider',
      'feature_id',
      'config_options',
    ],
    type: 'object',
  };
  validateAgainstSchema(props, schema);

  const a = analytics();
  if (a) {
    a.track(
      'flow_start',
      props || {},
      {
        ...options,
        context: {
          ...(options?.context || {}),
          typewriter: {
            language: 'typescript',
            version: '',
          },
        },
      },
      callback
    );
  }
}
/**
 * Fires a 'GenerateClicked' track call.
 *
 * @param GenerateClicked props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 	call is fired.
 */
export function generateClicked(
  props: GenerateClicked,
  options?: Options,
  callback?: Callback
): void {
  const schema = {
    $id: 'generate_clicked',
    description: 'Event used by Integrations for tracking clicks on the generate button',
    properties: {
      ai_model: { description: 'AI model used for the action.', type: 'string' },
      ai_provider: {
        description: 'Service provider of the AI model used for the action.',
        type: 'string',
      },
      app_key: { description: 'Key of the app that the action was taken in.', type: 'string' },
      app_name: { description: 'Name of the app that the action was taken in.', type: 'string' },
      config_options: {
        description: 'Config options that have been filled out for the action.',
        properties: {
          has_additional: { description: '', type: 'boolean' },
          has_audience: { description: '', type: 'boolean' },
          has_exclude: { description: '', type: 'boolean' },
          has_include: { description: '', type: 'boolean' },
          has_profile: { description: '', type: 'boolean' },
          has_tone: { description: '', type: 'boolean' },
          has_values: { description: '', type: 'boolean' },
        },
        type: 'object',
      },
      content_generation_prompt: {
        description:
          'The text of the prompt that was submitted. This will not include any text from a source field.',
        type: 'string',
      },
      content_type_id: {
        description: 'Content type ID for the entry currently being edited.',
        type: 'string',
      },
      entry_id: { description: 'Entry ID for the entry currently being edited.', type: 'string' },
      environment_key: { description: 'The environment in which the app is used.', type: 'string' },
      feature_id: {
        description:
          'The corresponding ID of the current feature. See https://github.com/contentful/apps/blob/master/apps/ai-content-generator/src/configs/features/featureConfig.tsx#L9',
        type: 'string',
      },
      from_prompt: {
        description: 'Whether the action was performed using a prompt instead of a source.',
        type: 'boolean',
      },
      organization_key: {
        description: 'The organization owning the space in which the app is used.',
        type: 'string',
      },
      source_field: { description: 'Name of source field.', type: 'string' },
      space_key: { description: 'The space in which the app is used.', type: 'string' },
      target_locale: { description: 'Target locale of the action.', type: 'string' },
    },
    required: [
      'app_key',
      'environment_key',
      'organization_key',
      'space_key',
      'content_type_id',
      'entry_id',
      'ai_model',
      'ai_provider',
      'feature_id',
      'config_options',
    ],
    type: 'object',
  };
  validateAgainstSchema(props, schema);

  const a = analytics();
  if (a) {
    a.track(
      'generate_clicked',
      props || {},
      {
        ...options,
        context: {
          ...(options?.context || {}),
          typewriter: {
            language: 'typescript',
            version: '',
          },
        },
      },
      callback
    );
  }
}
/**
 * Fires a 'GeneratedContentEdited' track call.
 *
 * @param GeneratedContentEdited props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 	call is fired.
 */
export function generatedContentEdited(
  props: GeneratedContentEdited,
  options?: Options,
  callback?: Callback
): void {
  const schema = {
    $id: 'generated_content_edited',
    description:
      'Event used by Integrations for tracking when the user edits the generated content',
    properties: {
      ai_model: { description: 'AI model used for the action.', type: 'string' },
      ai_provider: {
        description: 'Service provider of the AI model used for the action.',
        type: 'string',
      },
      app_key: { description: 'Key of the app that the action was taken in.', type: 'string' },
      app_name: { description: 'Name of the app that the action was taken in.', type: 'string' },
      config_options: {
        description: 'Config options that have been filled out for the action.',
        properties: {
          has_additional: { description: '', type: 'boolean' },
          has_audience: { description: '', type: 'boolean' },
          has_exclude: { description: '', type: 'boolean' },
          has_include: { description: '', type: 'boolean' },
          has_profile: { description: '', type: 'boolean' },
          has_tone: { description: '', type: 'boolean' },
          has_values: { description: '', type: 'boolean' },
        },
        type: 'object',
      },
      content_generation_prompt: {
        description:
          'The text of the prompt that was submitted. This will not include any text from a source field.',
        type: 'string',
      },
      content_type_id: {
        description: 'Content type ID for the entry currently being edited.',
        type: 'string',
      },
      entry_id: { description: 'Entry ID for the entry currently being edited.', type: 'string' },
      environment_key: { description: 'The environment in which the app is used.', type: 'string' },
      feature_id: {
        description:
          'The corresponding ID of the current feature. See https://github.com/contentful/apps/blob/master/apps/ai-content-generator/src/configs/features/featureConfig.tsx#L9',
        type: 'string',
      },
      from_prompt: {
        description: 'Whether the action was performed using a prompt instead of a source.',
        type: 'boolean',
      },
      organization_key: {
        description: 'The organization owning the space in which the app is used.',
        type: 'string',
      },
      source_locale: { description: 'Source locale of the action.', type: 'string' },
      space_key: { description: 'The space in which the app is used.', type: 'string' },
      target_locale: { description: 'Target locale of the action.', type: 'string' },
    },
    required: [
      'app_key',
      'environment_key',
      'organization_key',
      'space_key',
      'content_type_id',
      'entry_id',
      'ai_model',
      'ai_provider',
      'feature_id',
      'config_options',
    ],
    type: 'object',
  };
  validateAgainstSchema(props, schema);

  const a = analytics();
  if (a) {
    a.track(
      'generated_content_edited',
      props || {},
      {
        ...options,
        context: {
          ...(options?.context || {}),
          typewriter: {
            language: 'typescript',
            version: '',
          },
        },
      },
      callback
    );
  }
}
/**
 * Fires a 'RegenerationClicked' track call.
 *
 * @param RegenerationClicked props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 	call is fired.
 */
export function regenerationClicked(
  props: RegenerationClicked,
  options?: Options,
  callback?: Callback
): void {
  const schema = {
    $id: 'regeneration_clicked',
    description: 'Event used by Integrations for tracking the regeneration of content',
    properties: {
      ai_model: { description: 'AI model used for the action.', type: 'string' },
      ai_provider: {
        description: 'Service provider of the AI model used for the action.',
        type: 'string',
      },
      app_key: { description: 'Key of the app that the action was taken in.', type: 'string' },
      app_name: { description: 'Name of the app that the action was taken in.', type: 'string' },
      config_options: {
        description: 'Config options that have been filled out for the action.',
        properties: {
          has_additional: { description: '', type: 'boolean' },
          has_audience: { description: '', type: 'boolean' },
          has_exclude: { description: '', type: 'boolean' },
          has_include: { description: '', type: 'boolean' },
          has_profile: { description: '', type: 'boolean' },
          has_tone: { description: '', type: 'boolean' },
          has_values: { description: '', type: 'boolean' },
        },
        type: 'object',
      },
      content_generation_prompt: {
        description:
          'The text of the prompt that was submitted. This will not include any text from a source field.',
        type: 'string',
      },
      content_type_id: {
        description: 'Content type ID for the entry currently being edited.',
        type: 'string',
      },
      entry_id: { description: 'Entry ID for the entry currently being edited.', type: 'string' },
      environment_key: { description: 'The environment in which the app is used.', type: 'string' },
      feature_id: {
        description:
          'The corresponding ID of the current feature. See https://github.com/contentful/apps/blob/master/apps/ai-content-generator/src/configs/features/featureConfig.tsx#L9',
        type: 'string',
      },
      from_prompt: {
        description: 'Whether the action was performed using a prompt instead of a source.',
        type: 'boolean',
      },
      organization_key: {
        description: 'The organization owning the space in which the app is used.',
        type: 'string',
      },
      source_field: { description: 'Name of source field.', type: 'string' },
      space_key: { description: 'The space in which the app is used.', type: 'string' },
      target_locale: { description: 'Target locale of the action.', type: 'string' },
    },
    required: [
      'app_key',
      'environment_key',
      'organization_key',
      'space_key',
      'content_type_id',
      'entry_id',
      'ai_model',
      'ai_provider',
    ],
    type: 'object',
  };
  validateAgainstSchema(props, schema);

  const a = analytics();
  if (a) {
    a.track(
      'regeneration_clicked',
      props || {},
      {
        ...options,
        context: {
          ...(options?.context || {}),
          typewriter: {
            language: 'typescript',
            version: '',
          },
        },
      },
      callback
    );
  }
}
/**
 * Fires a 'SidebarRendered' track call.
 *
 * @param SidebarRendered props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 	call is fired.
 */
export function sidebarRendered(
  props: SidebarRendered,
  options?: Options,
  callback?: Callback
): void {
  const schema = {
    $id: 'sidebar_rendered',
    description: 'Event used by Integrations for tracking when the sidebar renders',
    properties: {
      ai_model: { description: 'AI model used for the action.', type: 'string' },
      ai_provider: {
        description: 'Service provider of the AI model used for the action.',
        type: 'string',
      },
      app_key: { description: 'Key of the app that the action was taken in.', type: 'string' },
      app_name: { description: 'Name of the app that the action was taken in.', type: 'string' },
      config_options: {
        description: 'Config options that have been filled out for the action.',
        properties: {
          has_additional: { description: '', type: 'boolean' },
          has_audience: { description: '', type: 'boolean' },
          has_exclude: { description: '', type: 'boolean' },
          has_include: { description: '', type: 'boolean' },
          has_profile: { description: '', type: 'boolean' },
          has_tone: { description: '', type: 'boolean' },
          has_values: { description: '', type: 'boolean' },
        },
        type: 'object',
      },
      content_type_id: {
        description: 'Content type ID for the entry currently being edited.',
        type: 'string',
      },
      entry_id: { description: 'Entry ID for the entry currently being edited.', type: 'string' },
      environment_key: { description: 'The environment in which the app is used.', type: 'string' },
      organization_key: {
        description: 'The organization owning the space in which the app is used.',
        type: 'string',
      },
      space_key: { description: 'The space in which the app is used.', type: 'string' },
    },
    required: [
      'app_key',
      'environment_key',
      'organization_key',
      'space_key',
      'content_type_id',
      'entry_id',
      'ai_model',
      'ai_provider',
      'config_options',
    ],
    type: 'object',
  };
  validateAgainstSchema(props, schema);

  const a = analytics();
  if (a) {
    a.track(
      'sidebar_rendered',
      props || {},
      {
        ...options,
        context: {
          ...(options?.context || {}),
          typewriter: {
            language: 'typescript',
            version: '',
          },
        },
      },
      callback
    );
  }
}

const clientAPI = {
  /**
   * Updates the run-time configuration of this Typewriter client.
   *
   * @param {TypewriterOptions} options - the options to upsert
   *
   * @typedef {Object} TypewriterOptions
   * @property {AnyAnalytics} [analytics] - Underlying analytics instance where analytics
   * 		calls are forwarded on to. Defaults to window.analytics.
   * @property {Function} [onViolation] - Handler fired when if an event does not match its spec. This handler does not fire in
   * 		production mode, because it requires inlining the full JSON Schema spec for each event in your Tracking Plan. By default,
   * 		it will throw errors if NODE_ENV="test" so that tests will fail if a message does not match the spec. Otherwise, errors
   * 		will be logged to stderr.
   */
  setTypewriterOptions,

  /**
   * Fires a 'ConfigSaved' track call.
   *
   * @param ConfigSaved props - The analytics properties that will be sent to Segment.
   * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
   * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
   * 	call is fired.
   */
  configSaved,
  /**
   * Fires a 'FlowStart' track call.
   *
   * @param FlowStart props - The analytics properties that will be sent to Segment.
   * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
   * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
   * 	call is fired.
   */
  flowStart,
  /**
   * Fires a 'GenerateClicked' track call.
   *
   * @param GenerateClicked props - The analytics properties that will be sent to Segment.
   * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
   * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
   * 	call is fired.
   */
  generateClicked,
  /**
   * Fires a 'GeneratedContentEdited' track call.
   *
   * @param GeneratedContentEdited props - The analytics properties that will be sent to Segment.
   * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
   * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
   * 	call is fired.
   */
  generatedContentEdited,
  /**
   * Fires a 'RegenerationClicked' track call.
   *
   * @param RegenerationClicked props - The analytics properties that will be sent to Segment.
   * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
   * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
   * 	call is fired.
   */
  regenerationClicked,
  /**
   * Fires a 'SidebarRendered' track call.
   *
   * @param SidebarRendered props - The analytics properties that will be sent to Segment.
   * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
   * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
   * 	call is fired.
   */
  sidebarRendered,
};

export default new Proxy<typeof clientAPI>(clientAPI, {
  get(target, method) {
    if (typeof method === 'string' && Object.prototype.hasOwnProperty.call(target, method)) {
      return target[method as keyof typeof clientAPI];
    }

    return () => {
      console.warn(`⚠️  You made an analytics call (${String(method)}) that can't be found. Either:
         a) Re-generate your typewriter client: \`npx typewriter\`
         b) Add it to your Tracking Plan: https://app.segment.com/segment-oscb/protocols/tracking-plans/rs_1zTHJU9fd5mt7cndWnd4PgJbMCE`);
      const a = analytics();
      if (a) {
        a.track(
          'Unknown Analytics Call Fired',
          {
            method,
          },
          withTypewriterContext()
        );
      }
    };
  },
});
