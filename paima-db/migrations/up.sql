CREATE TABLE block_heights ( 
  block_height INTEGER PRIMARY KEY,
  seed TEXT NOT NULL,
  done BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE scheduled_data (
  id SERIAL PRIMARY KEY,
  block_height INTEGER NOT NULL,
  input_data TEXT NOT NULL
);

CREATE TABLE nonces (
  nonce TEXT PRIMARY KEY,
  block_height INTEGER NOT NULL
);

CREATE TABLE historical_game_inputs (
  id SERIAL PRIMARY KEY,
  block_height INTEGER NOT NULL,
  user_address TEXT NOT NULL,
  input_data TEXT NOT NULL
);

CREATE TABLE presync_block_heights (
  block_height INTEGER PRIMARY KEY,
  done BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE chain_data_extensions (
  cde_id INTEGER PRIMARY KEY,
  cde_type INTEGER NOT NULL,
  contract_address TEXT NOT NULL,
  start_blockheight INTEGER NOT NULL
);

CREATE TABLE cde_erc20_data (
  cde_id INTEGER NOT NULL,
  wallet_address TEXT NOT NULL,
  balance TEXT NOT NULL,
  PRIMARY KEY (cde_id, wallet_address)
);

CREATE TABLE cde_erc721_data (
  cde_id INTEGER NOT NULL,
  token_id INTEGER NOT NULL,
  nft_owner TEXT NOT NULL,
  PRIMARY KEY (cde_id, token_id)
);
