import IdentityCardDto from './identity-card-dto';
import PassportDto from './passport-dto';

export default interface WalletDto {
  identityCard: IdentityCardDto;
  passport: PassportDto;
}
