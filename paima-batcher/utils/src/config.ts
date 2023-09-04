import { GameInputValidatorCoreType } from './types';

export class ENV {
  // Blockchain:
  static get CHAIN_URI(): string {
    return process.env.CHAIN_URI || '';
  }

  static get STORAGE_CONTRACT_ADDRESS(): string {
    return process.env.STORAGE_CONTRACT_ADDRESS || '';
  }

  static get DEFAULT_FEE(): string {
    return process.env.DEFAULT_FEE || '';
  }

  static get BATCHER_PRIVATE_KEY(): string {
    return process.env.BATCHER_PRIVATE_KEY || '';
  }

  // Webserver:
  static get BATCHER_PORT(): number {
    return parseInt(process.env.BATCHER_PORT || '0', 10);
  }

  // DB:
  static get BATCHER_DB_HOST(): string {
    return process.env.BATCHER_DB_HOST || '';
  }

  static get BATCHER_DB_USER(): string {
    return process.env.BATCHER_DB_USER || '';
  }

  static get BATCHER_DB_PW(): string {
    return process.env.BATCHER_DB_PW || '';
  }

  static get BATCHER_DB_NAME(): string {
    return process.env.BATCHER_DB_NAME || '';
  }

  static get BATCHER_DB_PORT(): number {
    return parseInt(process.env.BATCHER_DB_PORT || '0', 10);
  }

  // Validation parameters:
  static get GAME_NODE_URI(): string {
    return process.env.GAME_NODE_URI || '';
  }

  static get GAME_INPUT_VALIDATOR_PERIOD(): number {
    return parseInt(process.env.GAME_INPUT_VALIDATOR_PERIOD || '0', 10);
  }

  static get BATCHED_TRANSACTION_POSTER_PERIOD(): number {
    return parseInt(process.env.BATCHED_TRANSACTION_POSTER_PERIOD || '0', 10);
  }

  static get BATCHED_MESSAGE_SIZE_LIMIT(): number {
    return parseInt(process.env.BATCHED_MESSAGE_SIZE_LIMIT || '0', 10);
  }

  static get MAX_USER_INPUTS_PER_MINUTE(): number {
    return parseInt(process.env.MAX_USER_INPUTS_PER_MINUTE || '0', 10);
  }

  static get MAX_USER_INPUTS_PER_DAY(): number {
    return parseInt(process.env.MAX_USER_INPUTS_PER_DAY || '0', 10);
  }

  // NOTE: this variable is not currently used, with DEFAULT_VALIDATION_ACTIVE determining the type.
  static get GAME_INPUT_VALIDATION_TYPE_NAME(): string {
    return process.env.GAME_INPUT_VALIDATION_TYPE_NAME || '';
  }

  static get DEFAULT_VALIDATION_ACTIVE(): boolean {
    return process.env.DEFAULT_VALIDATION_ACTIVE === 'true';
  }

  static get GAME_INPUT_VALIDATION_TYPE(): GameInputValidatorCoreType {
    return getGameInputValidatorTypeFromBool(this.DEFAULT_VALIDATION_ACTIVE);
  }

  // Self-signing:
  static get SELF_SIGNING_ENABLED(): boolean {
    return process.env.SELF_SIGNING_ENABLED === 'true';
  }

  static get SELF_SIGNING_API_KEY(): string {
    return process.env.SELF_SIGNING_API_KEY || '';
  }
}

function getGameInputValidatorTypeFromBool(
  defaultValidationActive: boolean
): GameInputValidatorCoreType {
  if (defaultValidationActive) {
    return GameInputValidatorCoreType.DEFAULT;
  } else {
    return GameInputValidatorCoreType.NO_VALIDATION;
  }
}
