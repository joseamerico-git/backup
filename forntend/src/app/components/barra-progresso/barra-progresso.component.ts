import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barra-progresso',
  standalone: true,
  imports: [],
  templateUrl: './barra-progresso.component.html',
  styleUrl: './barra-progresso.component.css'
})
export class BarraProgressoComponent {
  @Input() porcentagemAtual: number = 0;
}
