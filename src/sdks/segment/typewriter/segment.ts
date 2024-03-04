// This client was automatically generated by Segment Typewriter. ** Do Not Edit **
// To update this file, run:
//   npx typewriter

export interface AppCLIAppScripts {
    /**
     * with the --ci flag
     */
    ci: string;
    /**
     * command of the app-scripts call
     */
    command: string;
    [property: string]: any;
}

export interface AppCLICcaCreation {
    /**
     * values added by flag or with interactive mode
     */
    interactive: boolean;
    /**
     * npm or yarn
     */
    manager: Manager;
    /**
     * Template used by the cca call
     */
    template?: string;
    [property: string]: any;
}

/**
 * npm or yarn
 */
export enum Manager {
    Npm = "npm",
    Yarn = "yarn",
}

/**
 * Ajv is a peer dependency for development builds. It's used to apply run-time validation
 * to message payloads before passing them on to the underlying analytics instance.
 *
 * Note that the production bundle does not depend on Ajv.
 * 
 * You can install it with: `npm install --save-dev ajv`.
 */
import Ajv, { ErrorObject } from 'ajv'

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
import type { AnalyticsSnippet, Analytics, AnalyticsBrowser, Options } from '@segment/analytics-next'

declare global {
    interface Window {
        analytics: AnalyticsSnippet;
    }
}

type AnyAnalytics = AnalyticsSnippet | Analytics | AnalyticsBrowser

/** The callback exposed by analytics.js. */
export type Callback = () => void

export type ViolationHandler = (
    message: Record<string, any>,
    violations: ErrorObject[]
) => void

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
        2,
    );

    console.warn(msg);
};

let onViolation = defaultValidationErrorHandler

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
    onViolation = options.onViolation || onViolation
}

/**
    * Validates a message against a JSON Schema using Ajv. If the message
    * is invalid, the `onViolation` handler will be called.
    */
function validateAgainstSchema(
    message: Record<string, any>,
    schema: object
) {
    const ajv = new Ajv({ allErrors: true, verbose: true })

    if (!ajv.validate(schema, message) && ajv.errors) {
        onViolation(message, ajv.errors)
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
 * Fires a 'AppCLIAppScripts' track call.
 *
 * @param AppCLIAppScripts props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 	call is fired.
 */
export function appCLIAppScripts(props: AppCLIAppScripts, options?: Options, callback?: Callback): void {

    const schema = {"$id":"app-cli-app-scripts","properties":{"ci":{"$id":"/properties/ci","description":"with the --ci flag","type":"string"},"command":{"$id":"/properties/command","description":"command of the app-scripts call","type":"string"}},"required":["command","ci"],"type":"object"};
    validateAgainstSchema(props, schema);

    const a = analytics();
    if (a) {
        a.track('app-cli-app-scripts', props || {}, {...options,   context: {
            ...(options?.context || {}),
            typewriter: {
                language: 'typescript',
                version: '',
            },
        },}, callback);
    }
}
/**
 * Fires a 'AppCLICcaCreation' track call.
 *
 * @param AppCLICcaCreation props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 	call is fired.
 */
export function appCLICcaCreation(props: AppCLICcaCreation, options?: Options, callback?: Callback): void {

    const schema = {"$id":"app-cli-cca-creation","properties":{"interactive":{"$id":"/properties/interactive","description":"values added by flag or with interactive mode","type":"boolean"},"manager":{"$id":"/properties/manager","description":"npm or yarn","enum":["npm","yarn"],"type":"string"},"template":{"$id":"/properties/template","description":"Template used by the cca call","type":"string"}},"required":["interactive","manager"],"type":"object"};
    validateAgainstSchema(props, schema);

    const a = analytics();
    if (a) {
        a.track('app-cli-cca-creation', props || {}, {...options,   context: {
            ...(options?.context || {}),
            typewriter: {
                language: 'typescript',
                version: '',
            },
        },}, callback);
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
     * Fires a 'AppCLIAppScripts' track call.
     *
     * @param AppCLIAppScripts props - The analytics properties that will be sent to Segment.
     * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
     * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
     * 	call is fired.
     */
    appCLIAppScripts,
    /**
     * Fires a 'AppCLICcaCreation' track call.
     *
     * @param AppCLICcaCreation props - The analytics properties that will be sent to Segment.
     * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
     * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
     * 	call is fired.
     */
    appCLICcaCreation,
};

export default new Proxy<typeof clientAPI>(clientAPI, {
    get(target, method) {
        if (typeof method === 'string' && target.hasOwnProperty(method)) {
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
                    withTypewriterContext(),
                );
            }
        };
    },
});

