/* @name cdeCardanoGetProjectedNft */
SELECT * FROM cde_cardano_projected_nft
WHERE owner_address = :owner_address!;

/* @name cdeCardanoProjectedNftInsertData */
INSERT INTO cde_cardano_projected_nft(
    cde_id,
    owner_address,
    current_tx_hash,
    current_tx_output_index,
    asset,
    amount,
    status,
    plutus_datum,
    for_how_long
) VALUES (
             :cde_id!,
             :owner_address!,
             :current_tx_hash!,
             :current_tx_output_index!,
             :asset!,
             :amount!,
             :status!,
             :plutus_datum!,
             :for_how_long!
         );

/* @name cdeCardanoProjectedNftUpdateData */
UPDATE cde_cardano_projected_nft
SET
    previous_tx_hash = :previous_tx_hash!,
    previous_tx_output_index = :previous_tx_output_index!,
    current_tx_hash = :new_tx_hash!,
    current_tx_output_index = :new_tx_output_index!,
    status = :status!,
    plutus_datum = :plutus_datum!,
    for_how_long = :for_how_long!
WHERE
    cde_id = :cde_id!
    AND owner_address = :owner_address!
    AND current_tx_hash = :previous_tx_hash!
    AND current_tx_output_index = :previous_tx_output_index!
    AND asset = :asset!
    AND amount = :amount!
RETURNING previous_tx_hash, previous_tx_output_index;