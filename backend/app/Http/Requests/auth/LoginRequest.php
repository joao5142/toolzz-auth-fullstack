<?php

namespace App\Http\Requests\auth;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{

    public function rules(): array
    {
        return [
            'email' => 'email|required|max:191|unique:users',
            'password' => 'string|required|max:191|min:8',
        ];
    }

    public function messages(): array
    {
        return [
            'email.required' => 'Preencha o campo de email!',
            'password.required' => 'Preencha o campo de senha',
        ];
    }
}
